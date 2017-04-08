import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { About } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = About;
 // constructor(){
  constructor(public navCtrl: NavController) {
    this.aboutPage = About;
  }

}
