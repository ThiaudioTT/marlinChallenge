import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    constructor(private router: Router) {}

    @Input() image: string = ''
    @Input() title: string = ''
    readonly sizeOfBody = 120 // tamanho maximo para aparecer no card
    @Input() body: string = ''
    // metadata
    @Input() id: string = ''

    ngOnInit(): void {
        // adiciona ... ao final do body se o tamanho for maior que o definido
        if (this.body.length > this.sizeOfBody)
            this.body = this.body.substring(0, this.sizeOfBody) + '...'
    }

    // navega para pagina de detalhes (news) com uma query indicando a noticia
    readMore() {
        this.router.navigate(['news'], {
            relativeTo: null, // relativo a home ('')
            queryParams: {
                id: this.id,
            },
            queryParamsHandling: 'merge',
            skipLocationChange: true, // esconde a query
        })
    }
}
