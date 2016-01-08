import {Component, View, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HeroesService} from '../../services/heroes.service';
import {HeroComponent} from '../hero/hero.component';
import {EditHeroComponent} from '../edit-hero/edit-hero.component';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'heroes',
	providers: [HeroesService]
})

@View({
	templateUrl: 'app/components/heroes/heroes.html',
	directives: [CORE_DIRECTIVES, HeroComponent, EditHeroComponent]
})

export class HeroesComponent implements OnInit {
	public title: string = 'Tour of Heroes';
	public heroes: Array<Hero>;
	public selectedHero: Hero;
	
	constructor(private _heroesService: HeroesService) { }
    
    ngOnInit() {
        this._heroesService.getHeroes()
            .subscribe((heroes: Array<Hero>) => this.heroes = heroes);
    }
	
	public onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}