import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { Group } from '../../models/group';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { FileService } from '../../../module-shared/services/file.service';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-add-or-update',
  templateUrl: './group-add-or-update.component.html',
  styleUrls: ['./group-add-or-update.component.css']
})
export class GroupAddOrUpdateComponent implements OnInit, OnChanges {
  @Input() groupInfo: Group;
  @Output() groupChanged = new EventEmitter<any>();

  languages: Language[];

  public uploadProgress: number;
  public message: string;
  public files: any;
  public isImageLoading: boolean;
  public imageToShow: any;

  public buttonTextSave = 'Save';
  public buttonTextNew = 'New';

  constructor(private groupService: GroupService, private languageService: LanguageService, private authService: AuthService, private fileService: FileService) {
  
  }

  ngOnInit() {
    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
    });
  }
  
  ngOnChanges() {
    if(!this.groupInfo){
      this.setInitialValuesForGroupData();
    };
  }

  private setInitialValuesForGroupData() {
    debugger;
    this.groupInfo = 
    {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      languageName: '',
      description: '',
    }

    this.message = null;
    this.files = null;
    this.imageToShow = null;
    this.getImageFromService();
  }

  public newRecord() {
    this.setInitialValuesForGroupData();
  }

  public saveRecord = function (event) {
    debugger;
    if (this.groupInfo.id) {
      this.groupService.update(this.groupInfo, this.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          this.groupChanged.emit();
          this.setInitialValuesForGroupData();
        }
      );
    } else {
      this.groupService.create(this.groupInfo, this.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          debugger;
          this.groupChanged.emit();
          this.setInitialValuesForGroupData();
        }
      );
    }
  };

  preview(files) {

    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageToShow = reader.result;
    }

    this.files = files;
  }

  getImageFromService() {
    debugger;
    this.isImageLoading = true;
    this.fileService.getGroupPreview(String(this.groupInfo.id), this.authService.authorizationHeaderValue).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;  
    }, error => {
      this.imageToShow = null;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
