import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-router.module'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

// import { HeroesComponent } from './heroes/heroes.component'

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
