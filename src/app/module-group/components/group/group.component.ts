import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service'
import * as _ from 'lodash';
import { Group } from '../../models/group';
import { AuthService } from '../../../module-account/services/auth/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groupData: Array<any>;
  public currentGroup: any;

  constructor(private groupService: GroupService, private authService: AuthService) {
    debugger;
    groupService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => this.groupData = response);
    this.currentGroup = this.setInitialValuesForGroupData();
  }

  ngOnInit() {
  }

  private setInitialValuesForGroupData(): Group {
    return {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      description: '',
      picture: '',
    }
  }

  public createOrUpdateGroup = function (group: any) {
    let groupWithId;
    groupWithId = _.find(this.groupData, (el => el.id === group.id));

    if (groupWithId) {
      const updateIndex = _.findIndex(this.groupData, { id: groupWithId.id });
      this.groupService.update(group, this.authService.authorizationHeaderValue).subscribe(
        () => this.groupData.splice(updateIndex, 1, group)
      );
    } else {
      this.groupService.create(group, this.authService.authorizationHeaderValue).subscribe(
        () => this.groupData.push(group)
      );
    }

    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public editClicked = function (record) {
    this.currentGroup = record;
  };

  public createClicked = function () {
    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public removeClicked(record) {
    const deleteIndex = _.findIndex(this.groupData, { id: record.id });
    this.groupService.remove(record, this.authService.authorizationHeaderValue).subscribe(
      () => this.groupData.splice(deleteIndex, 1)
    );
  }
}


