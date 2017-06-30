import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app-defult/app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroService} from './heroSerive/hero.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PageNotFoundComponent,
    HeroDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
