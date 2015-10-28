import {Component, View, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

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