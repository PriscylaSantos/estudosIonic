import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Telefones page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage() IonicPage
@Component({
  selector: 'page-telefones',
  templateUrl: 'telefones.html',
})
export class Telefones {

  public listaTelefones: Array<{nome: string, telefone: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   this.listaTelefones = [
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' },
  { nome: 'Ana', telefone: '(xx) x xxxx-xxxx' }
  ] ; 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Telefones');
  }

}
