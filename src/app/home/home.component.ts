import { Component, OnInit } from '@angular/core'
import { NewsapiService } from '../service/newsapi.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private services: NewsapiService) {}

    // display data
    news: any = []

    ngOnInit(): void {
        // pega os dados do DB
        this.services.getAllNews().subscribe((result) => {
            this.news = result
            // console.log(this.news)
        })
    }
}
