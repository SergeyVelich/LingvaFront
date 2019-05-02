import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service'
import * as _ from 'lodash';
import { Group } from '../group';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public groupData: Array<any>;
  public currentGroup: any;

  constructor (private groupService: GroupService) {
    groupService.getAll().subscribe((data: any) => this.groupData = data);
    this.currentGroup = this.setInitialValuesForGroupData();
  }

  ngOnInit() {
  }

  private setInitialValuesForGroupData() : Group {
    return {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      description: '',
      picture: '',
    }
  }

public createOrUpdateGroup = function(group: any) {
    // if group is present in groupData, we can assume this is an update
    // otherwise it is adding a new element
    debugger;
    let groupWithId;
    groupWithId = _.find(this.groupData, (el => el.id === group.id));

    if (groupWithId) {
      const updateIndex = _.findIndex(this.groupData, {id: groupWithId.id});
      this.groupService.update(group).subscribe(
        groupRecord => this.groupData.splice(updateIndex, 1, group)
      );
    } else {
      this.groupService.create(group).subscribe(
        groupRecord => this.groupData.push(group)
      );
    }

    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public editClicked = function(record) {
    this.currentGroup = record;
  };

  public createClicked = function() {
    this.currentGroup = this.setInitialValuesForGroupData(); 
  };

  public removeClicked(record) {
    const deleteIndex = _.findIndex(this.groupData, {id: record.id});
    this.groupService.remove(record).subscribe(
      result => this.groupData.splice(deleteIndex, 1)
    );
  }
}


