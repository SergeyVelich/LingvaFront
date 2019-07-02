import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Group } from '../../models/group';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  private refreshTableSubject: Subject<void> = new Subject<void>();
  private changeCurrentGroupSubject: Subject<Group> = new Subject<Group>();

  constructor() {

  }

  ngOnInit() {
    this.refreshTableSubject.next();
    this.changeCurrentGroupSubject.next(null);
  }

  public changeCurrentGroup = function (record) {
    this.changeCurrentGroupSubject.next(record);
  };

  public refreshTable = function (event) {
    this.refreshTableSubject.next();
  };
}


