import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PictureComponent } from './components/picture/picture.component';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';

//Pages
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsComponent,
    ContactComponent,
    AboutComponent,
    PictureComponent,
    PlanetsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
