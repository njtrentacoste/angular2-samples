/// <reference path="../../../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from 'app/services/HeroesService';
import {HeroComponent} from 'app/components/hero/hero';
import {EditHeroComponent} from 'app/components/edit-hero/edit-hero';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'heroes',
	bindings: [HeroesService]
})

@View({
	templateUrl: 'app/components/heroes/heroes.html',
	directives: [CORE_DIRECTIVES, HeroComponent, EditHeroComponent]
})

export class HeroesComponent {
	public title: string = 'Tour of Heroes';
	public heroes: Array<Hero>;
	public selectedHero: Hero;
	
	constructor(service: HeroesService) {
		this.heroes = service.heroes;
	}
	
	public onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	
	public getSelectedClass(hero: Hero){
		return { 'selected' : hero === this.selectedHero };
	}
}

bootstrap(HeroesComponent, [HeroesService]);