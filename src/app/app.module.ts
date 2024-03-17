import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { PlanetsModule } from './components/planets/planets.module';
import { HeaderComponent } from './components/header/header.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, PlanetsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
