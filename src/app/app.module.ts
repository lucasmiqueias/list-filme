import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilmesService } from './app.service';

import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InfiniteScrollDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
