import { Injectable } from '@angular/core';
import { Filmes } from './filmes';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class FilmesService {
  private URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2b8dbe6a';
  queryUrl = '&s=';
  pageUrl = '&page=';

  constructor(private http: Http) { }

  getFilmes(filme: string, page: number = 1): Observable<Filmes> {
    return this.http
      .get(this.URL + this.queryUrl + filme + this.pageUrl + page)
      .map((response: Response) => <Filmes>response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
