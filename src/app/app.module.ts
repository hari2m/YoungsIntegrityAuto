import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './MainPage/Home/index';
import { HeaderComponent } from './MainPage/Header/index';
import { AboutusComponent } from './MainPage/aboutus/index';
import { ContactusComponent } from './MainPage/contactus/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'ContactUs', component: ContactusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent  
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
