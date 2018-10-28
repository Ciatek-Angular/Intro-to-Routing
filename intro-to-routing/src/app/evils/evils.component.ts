import { Component, OnInit } from '@angular/core';
import { EvilService } from 'src/app/evils/evil.service';

@Component({
  selector: 'app-evils',
  templateUrl: './evils.component.html',
  styleUrls: ['./evils.component.css']
})
export class EvilsComponent implements OnInit {

  constructor(private evilService: EvilService) { }

  evils

  ngOnInit() {
    this.evils = this.evilService.evils
  }

}
