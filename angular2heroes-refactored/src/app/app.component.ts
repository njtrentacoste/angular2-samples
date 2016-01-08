import {Component, View} from 'angular2/core';
import {HeroesComponent} from './components/heroes/heroes.component';

@Component({
	selector: 'heroes-app'
})

@View({
	template: `<heroes></heroes>`,
	directives: [HeroesComponent]
})

export class AppComponent { }