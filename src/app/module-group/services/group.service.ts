import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Group } from 'src/app/module-group/models/group';
import { BaseService } from "../../module-shared/services/base.service";
import { ConfigService } from '../../module-shared/services/config.service';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { Sorter } from 'src/app/module-shared/models/sorter';

@Injectable({
  providedIn: 'root'
})

export class GroupService extends BaseService {

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
  }

  getAll(token: string, filters?: any, sorting?: Sorter): Observable<Group[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': token,
      })
    };

    let queryParam = '?'; 
    if(filters != null){
      filters.forEach((filter, key) => {
        if(queryParam != '?'){
          queryParam = queryParam + '&';
        }
        queryParam = queryParam + filter.propertyName + filter.operation + filter.propertyValue;
      });  
    }
    if(sorting != null){
      if(queryParam != '?'){
        queryParam = queryParam + '&';
      }
      queryParam = queryParam + 'sortProperty=' + sorting.sortProperty + '&sortOrder=' + sorting.sortOrder;
    }

    return this.http.get<Group[]>(this.configService.resourceApiURI + '/group' + queryParam, httpOptions).pipe(catchError(this.handleError));
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