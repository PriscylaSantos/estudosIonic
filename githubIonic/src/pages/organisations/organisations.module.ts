import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Organisations } from './organisations';

@NgModule({
  declarations: [
    Organisations,
  ],
  imports: [
    IonicModule.forChild(Organisations),
  ],
  exports: [
    Organisations
  ]
})
export class OrganisationsModule {}
