/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {HeroesComponent} from 'app/components/heroes/heroes';

@Component({
	selector: 'my-app'
})

@View({
	template: `<heroes></heroes>`,
	directives: [HeroesComponent]
})

class AppComponent {}

bootstrap(AppComponent);