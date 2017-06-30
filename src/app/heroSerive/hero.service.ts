import {Injectable} from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import {Hero} from '../model/hero';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroService {
  private headers = new Headers({'Content-type': 'application/json'})
  private heroeUrl = 'api/heroList';
  private heroeUrl2 = 'api/save';


  /* HEROES: Hero[] = [{'id': 1, 'name': 'dst'}, {'id': 2, 'name': 'dst'}, {'id': 3, 'name': 'dst'}, {
   'id': 4,
   'name': 'dst'
   }, {'id': 5, 'name': 'dst'}, {'id': 6, 'name': 'dst'}, {'id': 7, 'name': 'dst'}];
   */

  constructor(private http: Http) {
  }


  getHeroes(): Observable<Response> {


    this.http.get(this.heroeUrl).subscribe(function (data) {
      console.log(data)
    });
    return this.http.get(this.heroeUrl);
  }


  getHero(id: number): Observable<Response> {


    const params: URLSearchParams = new URLSearchParams();
    params.set('id', id + '');

    return this.http.get('api/findHeroById', params);
  }

  delete(id: number): Observable<Response> {

    console.log('id==============' + id);
    // return this.http.post('api/deleteHeroById', JSON.stringify({id: id}, {headers: this.headers});
    return this.http.post('api/deleteHeroById', JSON.stringify({id: id}), {headers: this.headers});
  }

  create(name: string): Observable<Response> {
    return this.http.post(this.heroeUrl2, JSON.stringify({name: name}), {headers: this.headers});

  }

  update(hero: Hero): Observable<Response> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('id', hero.id + '');
    return this.http
      .put('api/save', JSON.stringify(hero), {headers: this.headers})

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
