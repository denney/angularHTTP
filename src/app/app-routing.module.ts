import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'heroes'},
  { path: 'heroes', component: HeroesComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
