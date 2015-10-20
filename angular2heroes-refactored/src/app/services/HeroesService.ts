/// <reference path="../../../typings/angular2/angular2.d.ts" />
interface Hero {
	id: number;
	name: string;
}

class HeroesService {
	public heroes: Array<Hero>;
	
	constructor() {
		this.heroes = HEROES;
	}
}

var HEROES = [
	{ id: 1, name: 'Superman' },
	{ id: 2, name: 'Batman' },
	{ id: 3, name: 'Wonder Woman' },
	{ id: 4, name: 'Supergirl' },
	{ id: 5, name: 'Flash' },
	{ id: 6, name: 'Aquaman' },
	{ id: 7, name: 'Green Lantern' },
	{ id: 8, name: 'Martian Manhunter' }
];