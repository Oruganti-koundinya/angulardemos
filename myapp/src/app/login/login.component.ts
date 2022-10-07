import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = "Logged In Successfuly"
  constructor() { }

  ngOnInit(): void {
  }
  onclicked() {
    console.log(this.message);
  }
}
