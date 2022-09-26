import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
     public message = "success";
  constructor() { }

  ngOnInit() {
  }
  onclicked() {
    alert(this.message)
  }
}