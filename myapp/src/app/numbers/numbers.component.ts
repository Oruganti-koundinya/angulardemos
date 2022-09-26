import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  showNumbers = true;
  numbers = [23,126,143,6,3,9,308,1];
  boxNumber = 5;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.showNumbers = !this.showNumbers;
  }
}
