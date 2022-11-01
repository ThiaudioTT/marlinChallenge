import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _services:NewsapiService) { }
  
  // display data
  news:any = [];

  ngOnInit(): void {
    this._services.homeNews().subscribe((result) => {
      console.log(result);
      this.news = result;
      console.log(this.news);
    })
  }

}
