import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NewsapiService } from '../service/newsapi.service'

/**
 * Usa um algoritmo de busca baseado em regex, não é 100% perfeito como um sistema Google,
 * mas funciona.
 *
 * @param s string de pesquisa
 * @param data database
 * @returns database filtrada
 */
function searchAlgorithm(s: string, data: Array<Object>): Array<Object> {
    s = s.trim().toLowerCase() // remove espaços e deixa tudo em minúsculo

    return data.filter((obj: any) => {
        // PRECONDITION: isso esta aqui por conta de entradas nulas no banco de dados
        if (obj.title === null || obj.body === null) return false 

        // vamos fazer a pesquisa nos itens abaixo
        const title: string = obj['title'].trim().toLowerCase() // pega o titulo e deixa tudo em minúsculo
        const body: string = obj['body'].trim().toLowerCase() // a engine fica mais eficiente quando pesquisa no body, tambem.
        const image: string = obj['image'].trim().toLowerCase() // nomes de imagens podem ser uteis.

        // \w* eh para dar match em casos -> cat -> catsss...
        const regex: RegExp = new RegExp(s + '\\w*')
        return regex.test(title) || regex.test(body) || regex.test(image) // retorna falso ou verdadeiro se o titulo ou body contem a string de pesquisa
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
        private router: Router,
        private services: NewsapiService
    ) {}

    ngOnInit(): void {
        // observa a query param na url e faz a pesquisa
        this.route.queryParams.subscribe((params) => {
            this.search = params['s']
            if (this.search === undefined || this.search === '') {
                this.router.navigate(['404'])
                throw new Error('Search is undefined')
            }

            // get data from service
            this.services.getAllNews().subscribe((result) => {
                //console.log(result)
                this.data = result
                this.data = searchAlgorithm(this.search, this.data)
                //console.log('Searched: ', this.data)
            })
        })
    }
}
