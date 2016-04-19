import {Component, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HeroesService} from '../../services/heroes.service';
import {HeroComponent} from '../hero/hero.component';
import {EditHeroComponent} from '../edit-hero/edit-hero.component';
import {Hero} from '../../models';

@Component({
	selector: 'heroes',
	providers: [HeroesService],
	templateUrl: 'app/components/heroes/heroes.html',
	directives: [CORE_DIRECTIVES, HeroComponent, EditHeroComponent]
})

export class HeroesComponent implements OnInit {
	title: string = 'Tour of Heroes';
	heroes: Array<Hero>;
	selectedHero: Hero;
	
	constructor(private heroesService: HeroesService) { }
    
    ngOnInit() {
        this.heroesService.getHeroes()
            .subscribe((heroes: Array<Hero>) => this.heroes = heroes);
    }
	
	public onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}