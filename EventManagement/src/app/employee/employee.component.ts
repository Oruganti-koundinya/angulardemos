import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee.model';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  formValue !: FormGroup;
  employee: EmployeeModel=new EmployeeModel();
  employees !: any ;
  showAdd !:boolean;
  showUpdate !:boolean;
 


  constructor( private formbuilber:FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.formValue=this.formbuilber.group({
      fname:[''],
      lname:[''],
      email:['']

    })
  }
  clickAdd(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postEmployeeDetails(){
    this.employee.fname=this.formValue.value.fname;
    this.employee.lname=this.formValue.value.lname;
    this.employee.email=this.formValue.value.email;

    this.api.postEmployee(this.employee)
    .subscribe(res=>{
  alert("Employee Added Succesfully")
  this.formValue.reset();
  this.getAllEmployee();

let refo=document.getElementById("cancel");
refo?.click();

 },
  err=>{
    alert("Something went wrong!!")

  })
     
  }
  
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
   this.employees=res;
  })

  }
  deleteEmployee(employees:any){
    this.api.deleteEmployee(employees.id)
    .subscribe(res=>{
   alert("Employee Deleted Successfully")
   this.getAllEmployee();
  })

  }
  updateButton(employees:any){
    this.employee.id=employees.id;
    this.formValue.controls['fname'].setValue(employees.fname);
    this.formValue.controls['lname'].setValue(employees.lname);
    this.formValue.controls['email'].setValue(employees.email);
    this.showAdd=false;
    this.showUpdate=true;

}
updateEmployeeDetails(){
  this.employee.fname=this.formValue.value.fname;
    this.employee.lname=this.formValue.value.lname;
    this.employee.email=this.formValue.value.email;

    this.api.updateEmployee(this.employee,this.employee.id)
    .subscribe(res=>{
  alert("Employee Updated Succesfully ");
  this.formValue.reset();
  this.getAllEmployee();

let refo=document.getElementById("cancel");
refo?.click();
    })
}}