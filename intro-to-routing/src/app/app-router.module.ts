import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { HeroesComponent } from './heroes/heroes.component'
import { EvilsComponent } from './evils/evils.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { EvildetailComponent } from './evildetail/evildetail.component'

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'evil/:id', component: EvildetailComponent },
    { path: 'evils', component: EvilsComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes),CommonModule, FormsModule  ],
    declarations:[
        EvilsComponent,
        HeroesComponent,
        HeroDetailComponent,
        EvildetailComponent
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}