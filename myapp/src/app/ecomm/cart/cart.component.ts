import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productQuantity;

  @Output()
  productAdded =  new EventEmitter<{
    name : String;
    quantity : number;
    status : String;
  }>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddProduct(
    productNameInput : HTMLInputElement)
    {
      var product = {
        name : productNameInput.value,
        quantity : this.productQuantity,
        status : this.productQuantity > 0 ? 'Instock' : 'Outofstock',
      };
      console.log(product);
      this.productAdded.emit(product);
    }
}
