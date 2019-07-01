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
  public currentGroup: any;
  public refreshingTable: boolean;

  constructor(private groupService: GroupService, private authService: AuthService) {

  }

  ngOnInit() {
    this.currentGroup = this.setInitialValuesForGroupData();
  }

  private setInitialValuesForGroupData(): Group {
    return {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      languageName: '',
      description: '',
    }
  }

  public createOrUpdateGroup = function (data) {
    if (data.group.id) {
      this.groupService.update(data.group, data.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          this.refreshingTable = true;
        }
      );
    } else {
      this.groupService.create(data.group, data.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          this.refreshingTable = true;
        }
      );
    }

    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public editClicked = function (record) {
    this.currentGroup = record;
  };

  public removeClicked(record) {
    this.groupService.remove(record, this.authService.authorizationHeaderValue).subscribe(
      () => {
        this.refreshingTable = true;
      }
    );
  }

  public clearGroup = function () {
    this.currentGroup = this.setInitialValuesForGroupData();
  };
}


