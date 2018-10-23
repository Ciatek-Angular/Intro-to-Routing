import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';


import { HeroesComponent } from './heroes/heroes.component'
import { EvilsComponent } from './evils/evils.component'

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'evils', component: EvilsComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes),CommonModule  ],
    declarations:[
        EvilsComponent,
        HeroesComponent
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}