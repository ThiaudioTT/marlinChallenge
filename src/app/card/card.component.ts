import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input () image: string = "";
  @Input () title: string = "";
  @Input () body: string = "";

  // metadata
  @Input () id: string = ""; // string or number?

  ngOnInit(): void {
  }

  // navega para pagina de detalhes (news) com uma query indicando a noticia
  readMore() {
    this.router.navigate(['news'], {
      relativeTo: this.route,
      queryParams: {
        id: this.id,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false, // false for now
    })
  }

}