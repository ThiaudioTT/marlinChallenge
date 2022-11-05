import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { News } from './news'

@Injectable({
    providedIn: 'root',
})
export class NewsapiService {
    constructor(private _http: HttpClient) {}
    // News API
    private newsApiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';


    /** GET
     * 
     * @returns Todas as noticias
     */
    getAllNews(): Observable<any> {
        return this._http.get(this.newsApiUrl)
    }

    /** GET
     * 
     * @param id - id da noticia no DB
     * @returns - noticia com o id especificado
     */
    getNewsById(id: number): Observable<any> {
        return this._http.get(this.newsApiUrl + '/' + id)
    }

    /** POST
     * Posta a noticia no DB
     * 
     * @param news - noticia a ser adicionada
     */
    addNews(news: News): Observable<any> {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(news) // transforma o objeto news em json
        // console.log('POSTING: ', body)
        return this._http.post(this.newsApiUrl, body, { headers: headers })
    }
}
