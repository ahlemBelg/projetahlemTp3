import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { listmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    listmaterielComponent,
   
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
