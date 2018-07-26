import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilmesService } from './app.service';

import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { InfiniteScrollerDirective } from './infinite-scroll.directive';
import { AppRoutingModule } from './/app-routing.module';
import { ViewfilmeComponent } from './viewfilme/viewfilme.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InfiniteScrollerDirective,
    ViewfilmeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
