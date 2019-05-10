import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';  
import { Group } from 'src/app/module-group/models/group';  
import { BaseService } from "../../module-shared/services/base.service";
import { ConfigService } from '../../module-shared/services/config.service';

 @Injectable({  
  providedIn: 'root'  
})  
  
export class GroupService extends BaseService {  
  
  private headers: HttpHeaders;
    
  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      // 'Authorization': this.configService.authorizationHeaderValue,
    });
  }

  getAll(): Observable<Group[]> {  
    return this.http.get<Group[]>(this.configService.resourceApiURI + '/group');  
  }  
  getById(groupId: string): Observable<Group> {  
    return this.http.get<Group>(this.configService.resourceApiURI + '/group/get?id=' + groupId, {headers: this.headers}).pipe(catchError(this.handleError));  
  }  
  create(group: Group): Observable<Group> {  
    return this.http.post<Group>(this.configService.resourceApiURI + '/group/create', group, {headers: this.headers}).pipe(catchError(this.handleError));  
  }  
  update(group: Group): Observable<Group> {   
    return this.http.put<Group>(this.configService.resourceApiURI + '/group/update', group, {headers: this.headers}).pipe(catchError(this.handleError));  
  }  
  remove(group: Group): Observable<number> {  
    return this.http.delete<number>(this.configService.resourceApiURI + '/group/delete?id=' + group.id, {headers: this.headers}).pipe(catchError(this.handleError));  
  }  
}  