import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Group } from 'src/app/module-group/models/group';
import { BaseService } from "../../module-shared/services/base.service";
import { ConfigService } from '../../module-shared/services/config.service';
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})

export class GroupService extends BaseService {

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
  }

  getAll(token: string): Observable<Group[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };
    return this.http.get<Group[]>(this.configService.resourceApiURI + '/group', httpOptions).pipe(catchError(this.handleError));
  }
  getById(groupId: string, token: string): Observable<Group> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };
    return this.http.get<Group>(this.configService.resourceApiURI + '/group/get?id=' + groupId, httpOptions).pipe(catchError(this.handleError));
  }
  create(group: Group, token: string): Observable<Group> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };
    return this.http.post<Group>(this.configService.resourceApiURI + '/group/create', group, httpOptions).pipe(catchError(this.handleError));
  }
  update(group: Group, token: string): Observable<Group> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };
    return this.http.put<Group>(this.configService.resourceApiURI + '/group/update', group, httpOptions).pipe(catchError(this.handleError));
  }
  remove(group: Group, token: string): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };
    return this.http.delete<number>(this.configService.resourceApiURI + '/group/delete?id=' + group.id, httpOptions).pipe(catchError(this.handleError));
  }
}  