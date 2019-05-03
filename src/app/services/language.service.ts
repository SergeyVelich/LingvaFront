import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Language } from 'src/app/models/language';  
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class LanguageService {  
  private headers: HttpHeaders;
  private accessPointUrl: string;
  
  constructor(private http: HttpClient) {
    this.accessPointUrl = 'http://localhost:6001/api/info';
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getAll(): Observable<Language[]> {  
    return this.http.get<Language[]>(this.accessPointUrl + '/languages');  
  } 
}  