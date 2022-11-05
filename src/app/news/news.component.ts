import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NewsapiService } from '../service/newsapi.service'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
    id: any = ''
    news: any = {}
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private services: NewsapiService
    ) {
        this.news.title = 'Carregando notícia...' // pode servir como um loading, temporario.
    }

    ngOnInit(): void {
        // pega o parametro id da url
        this.route.queryParams.subscribe((params) => {
            this.id = params['id']
            if (this.id === undefined || this.id === '') {
                this.router.navigate(['404'])
                throw new Error('Id não encontrada');
            }

            // get data from service
            this.services.getNewsById(this.id).subscribe({
                next: (result) => { // pega o resultado e atribui a variavel news
                    this.news = result
                    // console.log('News get: ', this.news)

                    // make date readable
                    this.news.createdAt = new Date(this.news.createdAt).toLocaleString()
                },
                error: (error) => { // em caso erro.
                    this.router.navigate(['404'])
                    throw error
                },
            })
        })
    }
}
