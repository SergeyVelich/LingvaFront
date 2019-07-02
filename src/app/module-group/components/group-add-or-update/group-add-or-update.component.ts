import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { FileService } from '../../../module-shared/services/file.service';
import { GroupService } from '../../services/group.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-add-or-update',
  templateUrl: './group-add-or-update.component.html',
  styleUrls: ['./group-add-or-update.component.css']
})
export class GroupAddOrUpdateComponent implements OnInit {
  @Input() currentGroupChangedEvent: Observable<Group>;
  @Output() groupChanged = new EventEmitter<any>();

  languages: Language[];

  public groupInfo: Group;
  public message: string;
  public files: any;
  public isImageLoaded: boolean;
  public imageToShow: any;

  public buttonTextSave = 'Save';
  public buttonTextNew = 'New';

  constructor(private groupService: GroupService, private languageService: LanguageService, private authService: AuthService, private fileService: FileService) {
    this.setInitialValuesForGroupData();
  }

  ngOnInit() {   
    this.currentGroupChangedEvent.subscribe(response => {
        this.setInitialValuesForGroupData(response);
    });

    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
    });
  }

  private setInitialValuesForGroupData(group?: Group) {
    if(!group){
      group = new Group();     
    }

    this.groupInfo = group;
    this.message = null;
    this.files = null;
    this.imageToShow = null;
    this.isImageLoaded = false;
    this.getImageFromService();
  }

  public newRecord() {
    this.setInitialValuesForGroupData();
  }

  public saveRecord = function (event) {
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
      this.isImageLoaded = true;
    }

    this.files = files;
  }

  getImageFromService() {
    debugger;
    if(!this.groupInfo.id){
      return;
    }
    this.isImageLoaded = false;
    this.fileService.getGroupPreview(String(this.groupInfo.id), this.authService.authorizationHeaderValue).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoaded = true;  
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
