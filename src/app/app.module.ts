import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { PlanetsModule } from './components/planets/planets.module';
import { HeaderComponent } from './components/header/header.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PictureComponent } from './components/picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsComponent,
    ContactComponent,
    AboutComponent,
    PictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PlanetsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
