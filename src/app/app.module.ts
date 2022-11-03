import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { TopheadComponent } from './tophead/tophead.component';
import { AddnewspageComponent } from './addnewspage/addnewspage.component';
import { NewsComponent } from './news/news.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SidebarComponent,
    SearchpageComponent,
    TopheadComponent,
    AddnewspageComponent,
    NewsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
