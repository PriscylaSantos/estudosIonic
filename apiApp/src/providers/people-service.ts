import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {
  datas: any;
  constructor(public http: Http) {
    //console.log('Hello PeopleService Provider');
    //  this.data = null;
  }

  load() {
    if (this.datas) {
    // already loaded data
      return Promise.resolve(this.datas);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    //this.http.get('../assets/api.json')
    this.http.get('../assets/teste.json')
   // this.http.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.datas = data.results;
        resolve(this.datas);
      });
  });
}

}
