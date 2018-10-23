import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evils',
  templateUrl: './evils.component.html',
  styleUrls: ['./evils.component.css']
})
export class EvilsComponent implements OnInit {

  constructor() { }

  evils = ['akaino', 'akatski', 'pain' ]

  ngOnInit() {
  }

}
