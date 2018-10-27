import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailService } from '../heroes/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  index

  id
  name

  constructor( route: ActivatedRoute, private heroesService: HeroDetailService) { 
    this.index = route.paramMap.source
    this.id = this.index.value.id
    this.name = heroesService.getName(this.id)
  }

  ngOnInit() {
  }

  setName(name){
    this.heroesService.setName(this.id,name)
  }

}
