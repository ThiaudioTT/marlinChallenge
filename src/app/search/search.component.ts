import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}
  ngOnInit(): void {}

  searchValue: string = ''

  onSearchInput() {
    //precondition invalid input
    if (this.searchValue === '') return;
    
    console.log(this.searchValue)

    this._router.navigate(['search'], {
      relativeTo: this._route,
      queryParams: {
        s: this.searchValue,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false, // false for now
    })
  }
}
