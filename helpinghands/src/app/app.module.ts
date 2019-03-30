import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { PageComponent } from './page/page.component';
import { OptionsComponent } from './options/options.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CausesComponent } from './causes/causes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule ,Routes} from '@angular/router';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[


  {

    path:'',

    component:PageComponent

  },

  {

    path:'home',

    component:PageComponent

  },

  {

    path:'aboutus',

    component:AboutusComponent

  },
  {

    path:'causes',

    component:CausesComponent

  },

  {

    path:'contactus',

    component:ContactusComponent

  },

  {

    path:'login',

    component:LoginComponent

  },
  {

    path:'options',

    component:OptionsComponent

  }
]







@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    OptionsComponent,
    HomeheaderComponent,
    AboutusComponent,
    CausesComponent,
    ContactusComponent,
    FooterComponent,
    LoginheaderComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }







