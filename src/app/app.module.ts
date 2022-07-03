import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './conponents/about/about.component';
import { ContactComponent } from './conponent/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
