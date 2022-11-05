import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddnewspageComponent } from './addnewspage/addnewspage.component'

import { HomeComponent } from './home/home.component'
import { SearchpageComponent } from './searchpage/searchpage.component'
import { NewsComponent } from './news/news.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchpageComponent },
    { path: 'add', component: AddnewspageComponent },
    { path: 'news', component: NewsComponent },
    // other routes
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }, // 404 route
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
