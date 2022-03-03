# Learning Angular (not [AngularJS](https://github.com/hchiam/learning-angularjs))

Just one of the things I'm learning. <https://github.com/hchiam/learning> and <https://github.com/hchiam/learning-frameworks>

Angular comes with a CLI and comes with [TypeScript](https://www.typescriptlang.org/).

<https://angular.io/guide/what-is-angular>

## Minimal setup from scratch

<details>
<summary>Click to expand/collapse:</summary>

Using [Angular CLI](https://cli.angular.io/):

```bash
npm install -g @angular/cli
# to start a new project "my-app" from scratch:
ng new my-app
cd my-app
ng serve
```

Or triple-click to select this one-liner:

```bash
npm install -g @angular/cli && ng new my-app && cd my-app && ng serve
```

<http://localhost:4200>

</details>

## Intro

<details>
<summary>Click to expand/collapse:</summary>

Tutorial I'll be following: <https://angular.io/start>

<https://stackblitz.com/angular/anddyavxapb?file=src%2Fapp%2Fapp.component.ts>

```bash
cd angular-fhxvfx
yarn
# yarn build
yarn start # runs ng serve
```

http://localhost:4200

1. **Structural directive** examples: `*ngFor="let product of products"` and `*ngIf="product.description"`

2. **Property binding** example: `[title]="product.name + ' details'"`

3. **Custom property binding** example: `[product]="product"`

4. **Event binding** example: `(click)="share()"`

5. **Custom event binding** example: `(notify)="onNotify()"`

   - this can be combined with the child component's `@Output() notify = new EventEmitter();` (TS) and `(click)="notify.emit()"` (HTML), and then this will trigger the child component's `(notify)="onNotify()"` (HTML) that is written inside the parent component's markup (HTML) to trigger the parent's `onNotify()`.

To start understanding the files more, start here: `/src/app/product-list` --> the TS file links to the HTML and CSS files with:

```ts
// this is a decorator:
@Component({
  selector: "app-product-list", // <app-product-list> tag in DOM
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
// (this decorator indicates that the class in the later lines is a component)
```

```ts
export class ProductAlertsComponent implements OnInit {
  // the @Input() decorator indicates that the [product] prop data is passed in from the component's parent
  @Input() product;

  // the @Output() decorator combined with EventEmitter
  // lets us trigger an event with the [notify] prop changes,
  // and you can do (click)="notify.emit()" in the child HTML,
  // and (notify)="onNotify()" in the parent HTMl will run
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
```

If you change the `selector` to `".app-product-list"` then it'll be `<div class="app-product-list">` in the DOM.

You can generate a component with `ng generate component component-name` or with `ng g component component-name` (https://angular.io/cli/generate#component). It'll create a folder with 4 files in it (.css, .html, .spec.ts, and .ts).

I didn't have to explicitly import TS or HTML files. It just figured it out by the consistent naming! I tried sibling folders under `/app` and also tried moving the child component's folder inside its parent component's folder, and it also worked! Just use `ng g component component-name`!

</details>

## Routing/Navigation

<details>
<summary>Click to expand/collapse:</summary>

<https://angular.io/start/start-routing>

For example, associating a URL path with a component.

I needed some help getting my local `my-app` to work: <https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/>

```bash
cd my-app
npm i
ng serve
# http://localhost:4200
```

```bash
cd my-app
ng g component
```

- http://localhost:4200/
- http://localhost:4200/products/someID
- http://localhost:4200/products/anotherID
- http://localhost:4200/products/otherID

```html
<router-outlet></router-outlet>
```

```html
<div *ngFor="let product of products">
  <a [title]="'Product name'" [routerLink]="['/products', product.id]"
    >{{ product.name }}</a
  >
</div>
```

```html
<p>{{ product.description }}</p>
<a [title]="'Back to main'" [routerLink]="['/']">Back to main</a>
```

```ts
import { RouterModule } from "@angular/router";

import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

// ...

@NgModule({
  declarations: [AppComponent, ProductDetailsComponent, ProductListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent, ProductListComponent, ProductDetailsComponent],
})
export class AppModule {}
```

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor() {
    this.products = [
      {
        id: "someID",
        name: "Some product name",
        description: "Some product description.",
      },
      {
        id: "anotherID",
        name: "Another product name",
        description: "Another product description.",
      },
      {
        id: "otherID",
        name: "Other product name",
        description: "Other product description.",
      },
    ];
  }

  ngOnInit(): void {}
}
```

</details>

## Deployment/building/hosting, using Firebase, etc.

https://angular.io/start/start-deployment

## Older notes

Following a YouTube tutorial for Angular 8: <https://github.com/hchiam/learning-angular8>

## More notes

https://github.com/hchiam/learning-front-end-frameworks/tree/main/angular
