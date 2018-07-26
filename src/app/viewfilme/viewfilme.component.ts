import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-viewfilme',
  templateUrl: './viewfilme.component.html',
  styleUrls: ['./viewfilme.component.css']
})

export class ViewfilmeComponent implements OnInit {

  ID = this.route.snapshot.params['id'];
  filme: {};

  constructor( private route: ActivatedRoute, private router: Router, private http: Http ) {

  }

  ngOnInit(): void {

    this.http.get(`http://www.omdbapi.com/?apikey=2b8dbe6a&i=${this.ID}`)
              .map((response: Response ) => <Filme>response.json())
              .subscribe((data) => this.filme = data);
  }

}
