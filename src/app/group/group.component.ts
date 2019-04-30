import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { GroupService } from '../group.service';  
import { Group } from '../group';  
  
@Component({  
  selector: 'app-group',  
  templateUrl: './group.component.html',  
  styleUrls: ['./group.component.css']  
})  
export class GroupComponent implements OnInit {  
  dataSaved = false;  
  groupForm: any;  
  allGroups: Observable<Group[]>;  
  groupIdUpdate = null;  
  massage = null;  
  
  constructor(private formbulider: FormBuilder, private groupService:GroupService) { }  
  
  ngOnInit() {  
    this.groupForm = this.formbulider.group({  
      Name: ['', [Validators.required]],  
      Date: ['', [Validators.required]],  
      LanguageId: ['', [Validators.required]],  
      Description: ['', [Validators.required]],  
      Picture: ['', [Validators.required]],  
    });  
    this.loadAllGroups();  
  }  
  loadAllGroups() {  
    this.allGroups = this.groupService.getAllGroup();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const group = this.groupForm.value;
    debugger;  
    this.CreateGroup(group);  
    this.groupForm.reset();  
  }  
  loadGroupToEdit(groupId: string) {  
    this.groupService.getGroupById(groupId).subscribe(group=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.groupIdUpdate = group.id;  
      this.groupForm.controls['Name'].setValue(group.name);  
      this.groupForm.controls['Date'].setValue(group.date);  
      this.groupForm.controls['LanguageId'].setValue(group.languageId);  
      this.groupForm.controls['Description'].setValue(group.description);  
      this.groupForm.controls['Picture'].setValue(group.picture);
    });  
  
  }  
  CreateGroup(group: Group) {  
    if (this.groupIdUpdate == null) {  
      this.groupService.createGroup(group).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllGroups();  
          this.groupIdUpdate = null;  
          this.groupForm.reset();  
        }  
      );  
    } else {  
      group.id = this.groupIdUpdate;  
      this.groupService.updateGroup(group).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllGroups();  
        this.groupIdUpdate = null;  
        this.groupForm.reset();  
      });  
    }  
  }   
  deleteGroup(groupId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.groupService.deleteGroupById(groupId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllGroups();  
      this.groupIdUpdate = null;  
      this.groupForm.reset();  
  
    });  
  }  
}  
  resetForm() {  
    this.groupForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
}  