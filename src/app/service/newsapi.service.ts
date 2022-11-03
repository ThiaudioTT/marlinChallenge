import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  // News API
  private newsApiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';



  /*GET */
  getAllNews():Observable<any> {
    return this._http.get( this.newsApiUrl );
  }

  /*GET - RETURN A SINGLE NEWS */
  getNewsById(id: number):Observable<any> {
    return this._http.get( this.newsApiUrl + "/" + id ); // looks dangerous
  }

  // generate the id through the size of the json pls
  /*POST */
  addNews(news: News):Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(news);
    console.log("POSTING: ", body);
    return this._http.post( this.newsApiUrl, body, {'headers':headers});
    //return this._http.get( this.newsApiUrl );
  }
}
