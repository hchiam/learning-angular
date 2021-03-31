# Learning Angular (not AngularJS)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Angular comes with a CLI and comes with [TypeScript](https://www.typescriptlang.org/).

## Minimal:

Using [Angular CLI](https://cli.angular.io/):

```bash
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve
```

Or triple-click to select this one-liner:

```bash
npm install -g @angular/cli && ng new my-app && cd my-app && ng serve
```

<http://localhost:4200>

## Older work:

Following a YouTube tutorial for Angular 8: <https://github.com/hchiam/learning-angular8>

## Longer intro tutorial:

Tutorial I'll be following: <https://angular.io/start>

<https://stackblitz.com/angular/anddyavxapb?file=src%2Fapp%2Fapp.component.ts>

```bash
cd angular-fhxvfx
yarn
# yarn build
yarn start # runs ng serve
```

http://localhost:4200

Structural directive examples: `*ngFor="let product of products"` and `*ngIf="product.description"`

Property binding example: `[title]="product.name + ' details'"`

Custom property binding example: `[product]="product"`

Event binding example: `(click)="share()"`

Custom event binding example: `(notify)="onNotify()"`

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
  // the @Input() decorator indicates that the [product] prop data passed in from the component's parent
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

## Routing/Navigation

https://angular.io/start/start-routing

For example, associating a URL path with a component.

## Deployment/building/hosting, using Firebase, etc.

https://angular.io/start/start-deployment
