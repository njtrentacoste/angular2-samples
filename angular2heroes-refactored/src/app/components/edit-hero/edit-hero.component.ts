import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Hero} from '../../models';

@Component({
	selector: 'edit-hero',
	templateUrl: 'app/components/edit-hero/edit-hero.html',
	directives: [FORM_DIRECTIVES]
})

export class EditHeroComponent {
	@Input() hero: Hero;
}