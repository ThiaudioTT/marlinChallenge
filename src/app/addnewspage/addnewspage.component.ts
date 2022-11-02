import { Component, OnInit } from '@angular/core'
import { NewsapiService } from '../service/newsapi.service'
import { News } from '../service/news'

@Component({
  selector: 'app-addnewspage',
  templateUrl: './addnewspage.component.html',
  styleUrls: ['./addnewspage.component.scss'],
})
export class AddnewspageComponent implements OnInit {
  title = ''
  image = ''
  body = ''
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
