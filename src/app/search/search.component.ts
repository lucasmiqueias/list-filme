import { Component, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Filmes } from './../filmes';
import { FilmesService } from './../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements AfterViewChecked {

  scrollCallback;

  filmes: Filmes;
  filme: '';
  page: number;
  filmesLista: Filmes;
  currentPage = 2;

  constructor(private filmesService: FilmesService) {

    this.scrollCallback = this.getStories.bind(this);

  }

  getStories() {

    return this.filmesService.getFilmes(this.currentPage, this.filme).do(this.processData);

  }

  private processData = (news) => {

    this.currentPage++;

    setTimeout(this.changeFilmes(news), 6000);

  }

  changeFilmes(news) {
    this.filmes.Search = this.filmes.Search.concat(news.Search);
  }

  EnviarFilme(): void {
    this.filmesService.getFilmes(this.page, this.filme)
      .subscribe((data: Filmes) => this.filmes = data,
      error => console.log(error));
  }

  onEnter(enviarEnter: string) { this.EnviarFilme(); }

  ngAfterViewChecked() {

  }
}
