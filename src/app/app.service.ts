import { Injectable } from '@angular/core';
import { Filmes } from './filmes';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


const URL = 'https://www.omdbapi.com/?apikey=2b8dbe6a';

@Injectable()

export class FilmesService {

  constructor(private http: Http) { }

  getFilmes(page: number = 1, filme: string): Observable<Filmes> {
    return this.http.get(`${URL}&s=${filme}&page=${page}`)
                    .map((response: Response ) => <Filmes>response.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
