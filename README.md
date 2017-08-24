# FbTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

The purpose is to demonstrate how to create a unit test with a mock for the firebase database when using the [AngularFire2](https://github.com/angular/angularfire2) library.   It was created with 4.0.0-rc2 of angularfire.

It is set up to go against a public firebase database I have set up.  The database contains the json in the assets folder. The database is open for reads only.

A new test the insures that the items observable contains the right number of items from the mock has been added to [app.component.spec.ts](/src/app/app.component.spec.ts)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
