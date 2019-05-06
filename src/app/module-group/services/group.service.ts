import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Group } from 'src/app/module-group/models/group';  
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class GroupService {  
  private headers: HttpHeaders;
  private accessPointUrl: string;
  
  constructor(private http: HttpClient) {
    this.accessPointUrl = 'http://localhost:6001/api/group';
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getAll(): Observable<Group[]> {  
    return this.http.get<Group[]>(this.accessPointUrl);  
  }  
  getById(groupId: string): Observable<Group> {  
    return this.http.get<Group>(this.accessPointUrl + '/get?id=' + groupId, {headers: this.headers});  
  }  
  create(group: Group): Observable<Group> {  
    return this.http.post<Group>(this.accessPointUrl + '/create', group, {headers: this.headers});  
  }  
  update(group: Group): Observable<Group> {   
    return this.http.put<Group>(this.accessPointUrl + '/update', group, {headers: this.headers});  
  }  
  remove(group: Group): Observable<number> {  
    return this.http.delete<number>(this.accessPointUrl + '/delete?id=' + group.id, {headers: this.headers});  
  }  
}  