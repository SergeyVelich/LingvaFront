import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { Group } from '../../models/group';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { FileService } from '../../../module-shared/services/file.service';

@Component({
  selector: 'app-group-add-or-update',
  templateUrl: './group-add-or-update.component.html',
  styleUrls: ['./group-add-or-update.component.css']
})
export class GroupAddOrUpdateComponent implements OnInit, OnChanges {
  @Output() groupCreated = new EventEmitter<any>();
  @Output() groupCleared = new EventEmitter<any>();
  @Input() groupInfo: Group;

  languages: Language[];

  public uploadProgress: number;
  public message: string;
  public files: any;

  public buttonTextSave = 'Save';
  public buttonTextNew = 'New';

  constructor(private languageService: LanguageService, private authService: AuthService, private fileService: FileService) {
  }
  ngOnInit() {
    this.languageService.getAll(this.authService.authorizationHeaderValue).subscribe((response: any) => {
      this.languages = response;
    });
  }
  ngOnChanges() {
    this.message = null;
    this.files = null;
    this.imageToShow = null;
    this.getImageFromService();
  }

  public newRecord() {
    this.groupCleared.emit();
  }

  public addOrUpdateGroupRecord = function (event) {
    this.groupCreated.emit({ group: this.groupInfo, files: this.files });
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

  isImageLoading: boolean;
  imageToShow: any;

  getImageFromService() {
    debugger;
    this.isImageLoading = true;
    this.fileService.getGroupPreview(String(this.groupInfo.id), this.authService.authorizationHeaderValue).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
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
