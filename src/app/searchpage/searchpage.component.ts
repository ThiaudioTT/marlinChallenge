import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  search: string = ''
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.search = params['s']
    })
  }

  ngOnInit(): void {}
}
