import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

// declare a 404 route
const routes: Routes = [
  {path: '', component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'search', component: SearchpageComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
