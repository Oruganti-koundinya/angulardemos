import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomproduct',
  templateUrl: './ecomproduct.component.html',
  styleUrls: ['./ecomproduct.component.css']
})
export class EcomproductComponent implements OnInit {

  @Input()
  productElement : {
    name : String,
    quantity : number,
    status : string,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
