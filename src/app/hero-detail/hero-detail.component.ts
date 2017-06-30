import {Component, OnInit} from '@angular/core';
import {Hero} from "app/model/hero";

@Component({
  selector: 'app-hero-detail',
  // templateUrl: './hero-detail.component.html',
  template: `
<div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>

</div>

  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero ;

  constructor() {
  }

  ngOnInit() {
  }

}
