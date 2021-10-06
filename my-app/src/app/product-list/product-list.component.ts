import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor() {
    this.products = [
      {
        id: 'someID',
        name: 'Some product name',
        description: 'Some product description.',
      },
      {
        id: 'anotherID',
        name: 'Another product name',
        description: 'Another product description.',
      },
      {
        id: 'otherID',
        name: 'Other product name',
        description: 'Other product description.',
      },
    ];
  }

  ngOnInit(): void {}
}
