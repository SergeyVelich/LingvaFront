import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { Filter } from 'src/app/module-shared/models/filter';
import { Sorter } from 'src/app/module-shared/models/sorter';

@Component({
  selector: 'app-group-grid',
  templateUrl: './group-grid.component.html',
  styleUrls: ['./group-grid.component.css']
})

export class GroupGridComponent implements OnInit {
  @Input() groupData: Array<any>;
  @Output() removeClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() refreshTable = new EventEmitter<any>();

  languages: Language[];
  filters = new Map<string, Filter>();
  sorting = new Sorter('Name', 'Desc');
  filterName: string;
  filterLanguage: number;
  filterDate: Date;

  public displayedColumns: string[];

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.filterName = '';
    this.filterLanguage = 0;
    this.displayedColumns = ["date", "name", "language", "description", "picture", "edit", "delete"];
  }

  ngOnInit() {
    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
      this.languages.unshift(new Language(0, 'all'));
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
    let value = filterValue.toLowerCase();
    let operation = '=';

    this.onChangeFilter(new Filter(name, value, operation));
  }

  onChangeFilterLanguage(filterValue: number) {
    let name = 'languageId';
    let value = filterValue.toString();
    let operation = '=';

    this.onChangeFilter(new Filter(name, value, operation));
  }

  onChangeFilterDate(filterValue: number) {
    let name = 'date';
    let value = filterValue.toString();
    let operation = '=';

    this.onChangeFilter(new Filter(name, value, operation));
  }

  onChangeFilter(filter: Filter) {   
    this.filters.set(filter.propertyName, filter);
    this.refreshTable.emit({ filters: this.filters, sorting: this.sorting}); 
  }

  onChangeSorting(column: string) { 
    debugger;
    if(this.sorting.sortProperty === column){
      if(this.sorting.sortOrder === 'Desc'){
        this.sorting.sortOrder = 'Asc';
      }
      else{
        this.sorting.sortOrder = 'Desc';
      }
    }
    else{
      this.sorting = new Sorter(column, 'Desc');     
    }  
    this.refreshTable.emit({ filters: this.filters, sorting: this.sorting}); 
  }
}
