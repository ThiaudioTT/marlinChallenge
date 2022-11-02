import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  // News API
  private newsApiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';

  getAllNews():Observable<any> {
    return this._http.get( this.newsApiUrl );
  }
}
