import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { User } from '../models/user';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {
  githubApiUrl = 'https:api.github.com';

  constructor(public http: Http) { }
    
    load(): Observable <User[]> {
      return this.http.get(`${this.githubApiUrl}/users`)
        .map(res => <User[]>res.json());
    }
    //console.log('Hello GithubUsers Provider');

}