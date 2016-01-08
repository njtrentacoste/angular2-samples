/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app'
})

@View({
	template: `
		<h1>{{ title }}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ng-for="#hero of heroes" (click)="onSelect(hero)" [ng-class]="getSelectedClass(hero)">
				<span class="badge">{{ hero.id }}</span>&nbsp;<a>{{ hero.name }}</a>
			</li>
		</ul>
		<div *ng-if="selectedHero">
			<h2>{{ selectedHero.name }} details!</h2>
			<div><label>id: </label>{{ selectedHero.id }}</div>
			<div>
				<label>name:</label>
				<input [(ng-model)]="selectedHero.name" placeholder="name" />
			</div>
		</div>
	`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	styles:[`
		.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
		.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
		.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
		.heroes .badge {
			font-size: small;
			color: white;
			padding: 0.1em 0.7em;
			background-color: #369;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -1px;
		}
		.selected { background-color: #EEE; color: #369; }
  `]
})

export class AppComponent {
	public title: string;
	public heroes: Array<Hero>;
	public selectedHero: Hero;
	
	constructor() {
		this.title = 'Tour of Heroes';
		this.heroes = HEROES;
	}
	
	public onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	
	public getSelectedClass(hero: Hero) {
		return { 'selected': this.selectedHero === hero };
	}
	
	public get
}

bootstrap(AppComponent);

var HEROES: Array<Hero> = [
	{ id: 1, name: 'Superman' },
	{ id: 2, name: 'Batman' },
	{ id: 3, name: 'Wonder Woman' },
	{ id: 4, name: 'Supergirl' },
	{ id: 5, name: 'Flash' },
	{ id: 6, name: 'Aquaman' },
	{ id: 7, name: 'Green Lantern' },
	{ id: 8, name: 'Martian Manhunter' }
];