import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit(): void {}

    searchValue: string = ''

    /**
     * pesquisa o input do usuario usando queryParams, 
     * a pagina '/search' que irá receber o parametro 's' e fazer a pesquisa
     */
    onSearchInput() {
        //precondition invalid input
        if (this.searchValue === '') return // do nothing when press enter

        // console.log(this.searchValue)

        this.router.navigate(['search'], {
            relativeTo: null, // relative to root
            queryParams: {
                s: this.searchValue,
            },
            queryParamsHandling: 'merge',
            skipLocationChange: true, // hide the url
        })
    }
}
