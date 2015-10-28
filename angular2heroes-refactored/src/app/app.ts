import {Component, View} from 'angular2/angular2';
import {HeroesComponent} from './components/heroes/heroes';

@Component({
	selector: 'my-app'
})

@View({
	template: `<heroes></heroes>`,
	directives: [HeroesComponent]
})

export class AppComponent {}