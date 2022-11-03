import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // id = this.route.snapshot.paramMap.get('id');
  id: any = "";
  news: any = {};
  constructor(
    
    private route: ActivatedRoute,
    private services: NewsapiService,
    ) {}
    
    ngOnInit(): void {
      
      this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        // add precondition invalid ID

        // get data from service
        this.services.getNewsById(this.id).subscribe((result) => {
          this.news = result;
          console.log("News get: ", this.news);
        })
      })
    }

}
