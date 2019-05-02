import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-group',
  templateUrl: './grid-group.component.html',
  styleUrls: ['./grid-group.component.css']
})

export class GridGroupComponent implements OnInit {
  @Input() groupData: Array<any>;
  @Output() removeClicked = new EventEmitter<any>();
  @Output() createClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record) {
    this.removeClicked.emit(record);
  }
    
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.createClicked.emit();
  }
}
