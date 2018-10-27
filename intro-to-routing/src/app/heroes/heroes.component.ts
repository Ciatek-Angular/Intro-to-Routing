import { Component, OnInit } from '@angular/core';

import { HeroDetailService } from './heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroDetailService) { }

  heroes

  ngOnInit() {
    this.heroes = this.heroesService.heroes
  }


}
