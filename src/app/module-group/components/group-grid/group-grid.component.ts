import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-grid',
  templateUrl: './group-grid.component.html',
  styleUrls: ['./group-grid.component.css']
})

export class GroupGridComponent implements OnInit {
  @Input() groupData: Array<any>;
  @Output() removeClicked = new EventEmitter<any>();
  @Output() createClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  public displayedColumns: string[];

  constructor() {
    this.displayedColumns = ["date", "name", "language", "description", "picture", "edit", "delete"];
  }

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

  trackByFn(index, item) {
    return item.id; // уникальный id, соответствующий элементу
  }
}
