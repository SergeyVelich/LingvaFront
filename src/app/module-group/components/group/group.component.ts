import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Group } from '../../models/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  // private refreshTableSubject: Subject<void> = new Subject<void>();
  // private changeCurrentGroupSubject: Subject<Group> = new Subject<Group>();
  public currentGroup: Group;
  public refreshingTable: boolean;

  constructor() {

  }

  ngOnInit() {

  }

  public changeCurrentGroup = function (record) {
    // this.changeCurrentGroupSubject.next(record)
    this.currentGroup = record;
  };

  public refreshTable = function (event) {
    debugger;
    this.refreshingTable = true;
  };
}


