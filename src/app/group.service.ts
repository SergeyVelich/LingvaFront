import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Group } from './group';  
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class GroupService {  
  url = 'http://localhost:6001/Api/Group';  
  constructor(private http: HttpClient) { }  
  getAllGroup(): Observable<Group[]> {  
    return this.http.get<Group[]>(this.url);  
  }  
  getGroupById(groupId: string): Observable<Group> {  
    return this.http.get<Group>(this.url + '/GetGroupDetailsById/' + groupId);  
  }  
  createGroup(group: Group): Observable<Group> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Group>(this.url + '/InsertGroupDetails/',  
    group, httpOptions);  
  }  
  updateGroup(group: Group): Observable<Group> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Group>(this.url + '/UpdateGroupDetails/',  
    group, httpOptions);  
  }  
  deleteGroupById(groupid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteGroupDetails?id=' +groupid,  
 httpOptions);  
  }  
}  