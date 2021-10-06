import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor() {
    // TODO: pass in product
    this.product = {
      id: 'hi',
      description: 'Some product description.',
    };
  }

  ngOnInit(): void {}
}
