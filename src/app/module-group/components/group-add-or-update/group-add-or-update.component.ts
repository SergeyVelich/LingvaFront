import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';

@Component({
  selector: 'app-group-add-or-update',
  templateUrl: './group-add-or-update.component.html',
  styleUrls: ['./group-add-or-update.component.css']
})
export class GroupAddOrUpdateComponent implements OnInit {
  @Output() groupCreated = new EventEmitter<any>();
  @Input() groupInfo: Group;

  languages: Language[];
  
  public uploadProgress: number;

  public buttonTextSave = 'Save';
  public buttonTextNew = 'New';

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.clearGroupInfo();
  }
  ngOnInit() {
    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
    });
  }

  private clearGroupInfo = function () {
    // Create an empty group object
    this.groupInfo = {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      description: '',
      imagePath: '',
      imageFile: null,
    }
  };

  public newRecord() {
    this.clearGroupInfo();
  }

  public addOrUpdateGroupRecord = function (event) {
    this.groupCreated.emit(this.groupInfo);
    this.clearGroupInfo();
  };

  upload(files) {
    debugger;
    if (files.length === 0)
        return;

        this.groupInfo.imageFile = new FormData();

    for (let file of files){
        // this.groupInfo.imageFile.append(file.name, file);
    }

    // const req = new HttpRequest('POST', `api/files`, formData, {
    //     reportProgress: true,
    // });

    // this.http.request(req).subscribe(event => {
    //     if (event.type === HttpEventType.UploadProgress)
    //         this.uploadProgress = Math.round(100 * event.loaded / event.total);
    //     else if (event instanceof HttpResponse)
    //         console.log('Files uploaded!');
    };
}
