import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable'; // Dans le cas d'une récupération de data serveur
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  /*getHeroes(): Hero[] { récupérait des data fakes de mock-heroes (appel synchrone car accès direct aux données
    return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> { // cas d'une récup de data sur un serveur distant (appel asynchrone car non accès direct aux données)
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
