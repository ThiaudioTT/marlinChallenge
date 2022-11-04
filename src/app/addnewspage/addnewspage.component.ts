import { Component, OnInit } from '@angular/core'
import { NewsapiService } from '../service/newsapi.service'
import { News } from '../service/news'

@Component({
  selector: 'app-addnewspage',
  templateUrl: './addnewspage.component.html',
  styleUrls: ['./addnewspage.component.scss'],
})
export class AddnewspageComponent implements OnInit {

  // object news para ser adicionado.
  newsObj = new News()

  data = [];

  constructor(private newsApi: NewsapiService) {}

  ngOnInit(): void {
    this.refreshNews()
  }

  refreshNews() {
    this.newsApi.getAllNews().subscribe((data) => {
      console.log('Refreshed data: ', data)
      this.data = data
    })
  }

  addNews() {
    if(!this.newsObj.title || !this.newsObj.body || !this.newsObj.image) {window.alert('Por favor, preencha todos os campos'); return;}

    if(this.newsObj.title.length > 100) {window.alert('O título deve ter no máximo 100 caracteres'); return;}
    
    try {
      this.newsApi.addNews(this.newsObj).subscribe((data) => {
        this.refreshNews()
        window.alert("Notícia adicionada com sucesso!");
        window.location.reload();
      })
    } catch (error) {
      window.alert("Erro ao adicionar notícia!");
      console.log(error)
    }
  }
}
