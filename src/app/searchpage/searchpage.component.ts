import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NewsapiService } from '../service/newsapi.service'
import { firstValueFrom } from 'rxjs';

// algoritmo de busca imutavel
// Not perfectly, but it works, for now.
function searchAlgorithm(
  s: string,
  data: Array<Object>
): Array<Object> {
  s = s.trim().toLowerCase()
  return data.filter((news: any) => {
    return news['title'] === null
      ? false
      : news['title'].trim().toLowerCase() === s
  })
}

/* SECOND
async function getData(search: string, data: any, _services: NewsapiService) {
  console.log('getData', data);
  // get data from service
  /*
  _services.getAllNews().subscribe((result) => {
    console.log("2Rsult: ", result);
    data = result
  })
  
  await _services.getAllNews().subscribe((result) => {
    console.log("2Rsult: ", result);
    data = result
  })

  // search data
  data = await searchAlgorithm(search, data);
  console.log(data)
  return data;
}
*/

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
    /* FIRST
      this.route.queryParams.subscribe((params) => {
        this.search = params['s'];
  
        
        // get data from service
        this._services.getAllNews().subscribe((result) => {
          this.data = result;
        });

        // search data
        this.data = searchAlgorithm(this.search, this.data);
        console.log(this.data);
      })
      */
     /* SECOND
    this.route.queryParams.subscribe((params) => {
      this.search = params['s']

      // get data from service
      this.data = getData(this.search, this.data, this._services)
    })*/

    this.route.queryParams.subscribe((params) => {
      /*
        if(this.search !== params['s'])
        {
          this.search = params['s'];
          this.ngOnInit();

        }*/

        this.search = params['s'];
        // get data from service
        this._services.getAllNews().subscribe((result) => {
          console.log(result);
          this.data = result;
          this.data = searchAlgorithm(this.search, this.data);
          console.log("Searched: ", this.data);
        });
        
      })


  }
}
