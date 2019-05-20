import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';

@Component({
  selector: 'app-group-grid',
  templateUrl: './group-grid.component.html',
  styleUrls: ['./group-grid.component.css']
})

export class GroupGridComponent implements OnInit {
  @Input() groupData: Array<any>;
  @Output() removeClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() applyFilters = new EventEmitter<any>();

  languages: Language[];
  filters: [string, string];

  public displayedColumns: string[];

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.displayedColumns = ["date", "name", "language", "description", "picture", "edit", "delete"];
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

  applyFilter(filter) {
    if(this.filters.find(value => value == filter.name)){
      this.filters[filter.name] = filter.value;      
    }
    else{
      this.filters.join(filter.value);      
    }
    //  = filterValue.trim().toLowerCase();
    this.applyFilters.emit(this.filters);   
  }
}
