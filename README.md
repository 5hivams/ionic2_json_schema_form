# ionic-json-schema-form

Ionic framework library for the [Angular 2 JSON Schema Form](https://github.com/dschnelldavis/angular2-json-schema-form) this is the upgraded version with CSS support of [angular2-json-schema-form-ionic](https://github.com/jessehon/angular2-json-schema-form-ionic) 

## Installation

Ensure you have already installed and configured [Ionic2+](https://ionicframework.com/getting-started#cli) and [Angular 2 JSON Schema Form](https://github.com/dschnelldavis/angular2-json-schema-form).

To install this library, run:

```bash
$ npm install ionic-json-schema-form --save
```

and then from your Angular `AppModule`:

```typescript

// Import the library
...
import { IonicFrameworkModule } from 'ionic-json-schema-form';

@NgModule({
  imports: [
    ...

    // Specify the library as an import
    IonicFrameworkModule,

    // Configure angular2-json-schema-form to load the IonicFrameworkModule
    JsonSchemaFormModule.forRoot(IonicFrameworkModule),
  ],
  ...
})
export class AppModule { }
```

Once the library is imported, you can use angular2-json-schema-form as normal and components should
be replaced with their Ionic counterparts:

```html
<!-- You can now use the library component in a template -->
<ionic-content>
  <json-schema-form [form]="schema" [model]="model">
  </json-schema-form>
</ionic-content>
```

## Development

To generate the library for distribution

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT ©
