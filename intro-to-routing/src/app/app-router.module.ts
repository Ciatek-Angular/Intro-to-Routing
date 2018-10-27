import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { HeroesComponent } from './heroes/heroes.component'
import { EvilsComponent } from './evils/evils.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
// import { EvilDetailComponent } from ''

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    // { path: 'hero/:id', component: EvilDetailComponent },
    { path: 'evils', component: EvilsComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes),CommonModule, FormsModule  ],
    declarations:[
        EvilsComponent,
        HeroesComponent,
        HeroDetailComponent,
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}