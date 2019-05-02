import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Group } from '../group';

@Component({
  selector: 'app-add-or-update-group',
  templateUrl: './add-or-update-group.component.html',
  styleUrls: ['./add-or-update-group.component.css']
})
export class AddOrUpdateGroupComponent implements OnInit {
  @Output() groupCreated = new EventEmitter<any>();
  @Input() groupInfo: Group;

  public buttonText = 'Save';

  constructor() {
    this.clearGroupInfo();
    console.log(this.groupInfo.date);
  }
  ngOnInit() {
  }

  private clearGroupInfo = function() {
    // Create an empty group object
    if (typeof this.groupInfo === 'undefined')
    {
      this.groupInfo = {
        id: '0',
        name: '',
        date: '',
        languageId: 1,
        description: '',
        picture: '',
      };
    }
  };

  public addOrUpdateGroupRecord = function(event) {
    this.groupCreated.emit(this.groupInfo);
    this.clearGroupInfo();
  };
}
