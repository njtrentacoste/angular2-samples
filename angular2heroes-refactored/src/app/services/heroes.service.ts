import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Hero {
	id: number;
	name: string;
}

@Injectable()
export class HeroesService {
	private hostUrl: string = 'http://localhost:3000';
	private controller: string = '/heroes';
	private baseUrl: string = this.hostUrl + this.controller;
	
	constructor(private _http: Http) {}
	
	getHeroes(): Observable<Array<Hero>> {
		return this._http.get(this.baseUrl)
            .map((res: Response) => res.json());
	}
}