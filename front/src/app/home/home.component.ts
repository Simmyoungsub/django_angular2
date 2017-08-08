import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = "L";

  constructor() { }

  ngOnInit() {
  }

  onClick():void {
    this.name = "Kira";
    console.log(this.name);
  }
}
