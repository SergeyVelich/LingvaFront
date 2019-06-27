import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { Filter } from 'src/app/module-shared/models/filter';
import { Sorter } from 'src/app/module-shared/models/sorter';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-group-grid',
  templateUrl: './group-grid.component.html',
  styleUrls: ['./group-grid.component.css']
})

export class GroupGridComponent implements OnInit {
  @Input() groupData: Array<any>;
  @Input() length: number;
  @Input() defaultPageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() removeClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() refreshPage = new EventEmitter<any>();

  languages: Language[];
  filters = new Map<string, Filter>();
  sorting = new Sorter('Name', 'Desc');
  filterName: string;
  filterLanguage: number;
  filterDateFrom: Date;
  filterDateTo: Date;
  minFilterDate: Date;
  maxFilterDate: Date;
  pageSize: number;

  public displayedColumns: string[];

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.filterName = '';
    this.filterLanguage = 0;
    this.displayedColumns = ["date", "name", "language", "description", "imagePath", "edit", "delete"];
    this.pageSize = this.defaultPageSize;
  }

  ngOnInit() {
    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
    });
  }

  public deleteRecord(record) {
    this.removeClicked.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  trackByFn(index, item) {
    return item.id; // уникальный id, соответствующий элементу
  }

  onChangeFilterName(filterValue: string) {
    let name = 'name';
    if(filterValue == null || filterValue.trim().length == 0){
      this.onClearFilter(name);
    }
    else{
      let value = filterValue.toLowerCase();
      let operation = '=';
  
      this.onChangeFilter(new Filter(name, value, operation));           
    }
  }

  onChangeFilterLanguage(filterValue: number) {
    let name = 'languageId';
    if(filterValue == null || filterValue == 0){
      this.onClearFilter(name);
    }
    else{
      let value = filterValue.toString();
      let operation = '=';
  
      this.onChangeFilter(new Filter(name, value, operation));           
    }
  }

  onChangeFilterDateFrom(filterValue: Date) {
    let name = 'dateFrom';
    this.minFilterDate = this.filterDateFrom;
    if(filterValue == null){
      this.onClearFilter(name);
    }
    else{
      let value = new Date(filterValue).toUTCString();
      let operation = '=';
  
      this.onChangeFilter(new Filter(name, value, operation));           
    }
  }
  
  onChangeFilterDateTo(filterValue: Date) {
    let name = 'dateTo';
    this.maxFilterDate = this.filterDateTo;
    if(filterValue == null){
      this.onClearFilter(name);
    }
    else{
      let value = new Date(filterValue).toUTCString();
      let operation = '=';
  
      this.onChangeFilter(new Filter(name, value, operation));           
    }
  }

  onChangeFilter(filter: Filter) {  
    this.filters.set(filter.propertyName, filter);
    this.refreshPage.emit({ filters: this.filters, sorting: this.sorting}); 
  }

  onClearFilter(filterName: string) {  
    this.filters.delete(filterName);
    this.refreshPage.emit({ filters: this.filters, sorting: this.sorting}); 
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.sorting = new Sorter(sort.active, sort.direction);
    this.refreshPage.emit({ filters: this.filters, sorting: this.sorting});
  }

  onChangePage(event: any) {
    this.refreshPage.emit({ filters: this.filters, sorting: this.sorting, pageIndex: event.pageIndex + 1, pageSize: event.pageSize});
  }
}
