# @at-common/forms

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Code scaffolding

Run `ng generate component component-name --project @at-common/forms` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project @at-common/forms`.

> Note: Don't forget to add `--project @at-common/forms` or else it will be added to the default project in your `angular.json` file.

## How to create something new to export

As modules:

- In common-workspace/projects/at-common/src/lib run the command `ng generate module my-module --project=AtCommon`.
- This creates a `my-module` folder containing `my-module.module.ts`.
- In the `my-module` folder use the CLI to generate the desired components, services or other functionality as described in [Code scaffolding](#code-scaffolding).
- In `my-module.module.ts` add the newly created functionality to the module.
  - If its a component, pipe or directive add it to imports AND exports.
  - If its a service add it to proividers.
- Add the module AND all of the functionality to the `src/public-api.ts` file.

`projects\at-common\forms\src\lib\at-forms.module.ts` and related can be viewed as an example.

As standalones:
Create the functionality and add the export to the `src/public-api.ts` file.

## Build

Run `ng build @at-common/forms` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

Currently publishing the library happens by manual trigger at ADO.

## Running unit tests

Run `ng test @at-common/forms` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
