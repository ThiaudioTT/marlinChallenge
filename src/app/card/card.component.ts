import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input () image: string = "";
  @Input () title: string = "";
  @Input () body: string = "";

  ngOnInit(): void {
  }

}
