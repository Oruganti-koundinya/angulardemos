import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allowNewProduct = true;
  ProductCreationStatus = "No Product Added";
  productName = '';
  productCreated = false;
  products = [];
  constructor() { }

  ngOnInit(): void {
  }
  onCreateProduct(){
    this.products.push(this.productName);
    this.ProductCreationStatus = "Product Added !";
    this.productCreated = true;
    // console.log(this.products);
  }

}
