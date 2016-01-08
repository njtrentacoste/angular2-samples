import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {FORM_DIRECTIVES} from 'angular2/common';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'edit-hero',
	properties: ['hero']
})

@View({
	templateUrl: 'app/components/edit-hero/edit-hero.html',
	directives: [FORM_DIRECTIVES]
})

export class EditHeroComponent {
	public hero: Hero;
}