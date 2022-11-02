import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewspageComponent } from './addnewspage/addnewspage.component';


import { HomeComponent } from './home/home.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

// declare a 404 route
const routes: Routes = [
 {path: '', component: HomeComponent},
  {path: 'search', component: SearchpageComponent},
  {path: 'add', component: AddnewspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
