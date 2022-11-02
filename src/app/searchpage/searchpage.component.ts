import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NewsapiService } from '../service/newsapi.service'

// algoritmo de busca imutavel
// Not perfectly, but it works, for now.
function searchAlgorithm(s: string, data: Array<Object>): Array<Object> {
  s = s.trim().toLowerCase()
  return data.filter((news: any) => {
    return news['title'] === null
      ? false
      : news['title'].trim().toLowerCase() === s
  })
}

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  search: string = ''
  data: any = []
  constructor(
    private route: ActivatedRoute,
    private _services: NewsapiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.search = params['s']
      // get data from service
      this._services.getAllNews().subscribe((result) => {
        console.log(result)
        this.data = result
        this.data = searchAlgorithm(this.search, this.data)
        console.log('Searched: ', this.data)
      })
    })
  }
}
