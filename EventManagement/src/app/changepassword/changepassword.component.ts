import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private router: Router) {}
 

  signupForm!: FormGroup;

  

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required]),
      
    });
  }
  onclick() {
    alert("Password Updated Successfully")
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.router.navigate(['/admin']);
  }
}