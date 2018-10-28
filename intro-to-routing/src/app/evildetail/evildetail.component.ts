import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EvilService } from '../evils/evil.service'

@Component({
  selector: 'app-evildetail',
  templateUrl: './evildetail.component.html',
  styleUrls: ['./evildetail.component.css']
})
export class EvildetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private evilService: EvilService) { }
  
  index
  id
  name

  ngOnInit() {
    this.index = this.route.paramMap.source
    this.id = this.index.value.id
    this.name = this.evilService.getName(this.id)
  }

  setName(name){
    this.evilService.setName( this.id, this.name)
  }

}
