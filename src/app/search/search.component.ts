import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Filmes } from './../filmes';
import { FilmesService } from './../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {

  filmes: Filmes;
  filme: '';

  constructor(private filmesService: FilmesService) { }

  EnviarFilme(): void {
    this.filmesService.getFilmes(this.filme)
      .subscribe((data: Filmes) => this.filmes = data,
      error => console.log(error));
  }

}
