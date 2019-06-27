import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service'
import * as _ from 'lodash';
import { Group } from '../../models/group';
import { AuthService } from '../../../module-account/services/auth/auth.service';
import { FileService } from '../../../module-shared/services/file.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groupData: Array<any>;
  public currentGroup: any;
  public numberElements: number;
  public readonly defaultPageSize = 5;
  public readonly defaultPageIndex = 1;
  public readonly pageSizeOptions: number[] = [5, 10, 25];

  public params: any = { filters: null, sorting: null, pageIndex: this.defaultPageIndex, pageSize: this.defaultPageSize };

  constructor(private groupService: GroupService, private fileService: FileService, private authService: AuthService) {
    this.refreshTable();
    this.currentGroup = this.setInitialValuesForGroupData();
  }

  ngOnInit() {
  }

  private setInitialValuesForGroupData(): Group {
    return {
      id: 0,
      name: '',
      date: new Date(),
      languageId: 1,
      languageName: '',
      description: '',
    }
  }

  public createOrUpdateGroup = function (data) {
    let groupWithId;
    groupWithId = _.find(this.groupData, (el => el.id === data.group.id));

    if (groupWithId) {
      this.groupService.update(data.group, data.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          this.refreshTable();
        }
      );
    } else {
      this.groupService.create(data.group, data.files, this.authService.authorizationHeaderValue).subscribe(
        () => {
          this.refreshTable();
        }
      );
    }

    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public editClicked = function (record) {
    this.currentGroup = record;
    this.getImageFromService();
  };

  public removeClicked(record) {
    this.groupService.remove(record, this.authService.authorizationHeaderValue).subscribe(
      () => {
        this.refreshTable();
      }
    );
  }

  public refreshPage = function (params) {
    this.params = params;
    this.refreshTable();
    this.currentGroup = this.setInitialValuesForGroupData();
  };

  public refreshTable() {
    this.groupService.getAll(this.authService.authorizationHeaderValue, this.params.filters, this.params.sorting, this.params.pageIndex, this.params.pageSize).subscribe((response: any) => this.groupData = response);
    this.groupService.count(this.authService.authorizationHeaderValue, this.params.filters).subscribe((response: number) => this.numberElements = response);
  };

  isImageLoading: boolean;
  imageToShow: any;

  getImageFromService() {
    debugger;
    this.isImageLoading = true;
    this.fileService.getGroupPreview(String(this.currentGroup.id), this.authService.authorizationHeaderValue).subscribe(data => {
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

  public clearGroup = function () {
    this.currentGroup = this.setInitialValuesForGroupData();
  };
}


