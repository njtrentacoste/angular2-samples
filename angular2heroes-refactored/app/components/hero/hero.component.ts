import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {Hero} from '../../models';

@Component({
	selector: 'hero',
	templateUrl: 'app/components/hero/hero.html'
})

export class HeroComponent {
	@Input() hero: Hero;
}