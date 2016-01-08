import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap'

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'hero',
	properties: ['hero']
})

@View({
	templateUrl: 'app/components/hero/hero.html'
})

export class HeroComponent {
	public hero: Hero;
}