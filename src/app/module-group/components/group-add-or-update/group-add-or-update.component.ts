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
  public files: any;

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
    }

    this.imagePath = null;
    this.imgURL = null;
    this.message = null;
    this.files = null;
  };

  public newRecord() {
    this.clearGroupInfo();
  }

  public addOrUpdateGroupRecord = function (event) {
    this.groupCreated.emit({group: this.groupInfo, files: this.files});
    this.clearGroupInfo();
  };

    public imagePath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
      
      this.files = files;
    }

    upload(files) {
      debugger;
      if (files.length === 0)
          return;
  
      // // const req = new HttpRequest('POST', `api/files`, formData, {
      // //     reportProgress: true,
      // // });
  
      // // this.http.request(req).subscribe(event => {
      // //     if (event.type === HttpEventType.UploadProgress)
      // //         this.uploadProgress = Math.round(100 * event.loaded / event.total);
      // //     else if (event instanceof HttpResponse)
      // //         console.log('Files uploaded!');
    };
}
