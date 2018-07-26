import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ViewfilmeComponent } from './viewfilme/viewfilme.component';

const routes: Routes = [

  { path: 'view/:id', component: ViewfilmeComponent },

  { path: '', component: SearchComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
