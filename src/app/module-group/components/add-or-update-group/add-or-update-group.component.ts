import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-add-or-update-group',
  templateUrl: './add-or-update-group.component.html',
  styleUrls: ['./add-or-update-group.component.css']
})
export class AddOrUpdateGroupComponent implements OnInit {
  @Output() groupCreated = new EventEmitter<any>();
  @Input() groupInfo: Group;

  languages: Language[];

  public buttonText = 'Save';

  constructor(private languageService: LanguageService) {
    this.clearGroupInfo();
    console.log(this.groupInfo.date);
  }
  ngOnInit() {
    this.languageService.getAll().subscribe((response: any) => {
      console.log(response);
      this.languages = response;
      console.log(this.languages);    
    });
  }

  private clearGroupInfo = function() {
    // Create an empty group object
    if (typeof this.groupInfo === 'undefined')
    {
      this.groupInfo = {
        id: '0',
        name: '',
        date: new Date(),
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
