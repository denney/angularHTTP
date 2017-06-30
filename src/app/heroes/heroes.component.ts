import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {Router} from '@angular/router';
import {HeroService} from '../heroSerive/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroeList: Hero[];
  hh: Hero;
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }


    this.heroService.create(name)
      .subscribe(res => {
        this.hh = res.json();
        ;
        this.heroeList.push(this.hh)
        this.selectedHero = null;
      })

  }

  delete(hero: Hero): void {
    console.log('hero的id=============' + hero.id)
    this.heroService.delete(hero.id)
      .subscribe(res => {

        this.heroeList = this.heroeList.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    // 从服务加载列表数据
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(res =>
        this.heroeList = res.json()
      );


  }
}
