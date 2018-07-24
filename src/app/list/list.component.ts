import { Component } from '@angular/core';
import { FilmesService } from './../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  filme: string;

  currentPage: number = 1;

  news: Array<any> = [];

  scrollCallback;

  constructor(private filmesService: FilmesService) {

    this.scrollCallback = this.getStories.bind(this);

  }

  getStories() {

    return this.filmesService.getFilmes(this.filme, this.currentPage).do(this.processData);

  }

  private processData = (news) => {

    this.currentPage++;
    this.news = this.news.concat(news.json());

  }

}
