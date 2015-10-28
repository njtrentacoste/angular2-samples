import {Component, View, bootstrap} from 'angular2/angular2';

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