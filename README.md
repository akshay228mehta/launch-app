# SpaceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Deploy server rendered code

1. Initially Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
2. Run `npm run dev:ssr` to perform the server side rendering of the build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
#   l a u n c h - a p p  


## Approach used to develop the application
1. Angular universal has been used in order to perform the server side rendering for the application.
2. There are two important component a. FilterComponent and b. LandingPageComponent. Both component share the sibling relationship
   and communiction between both the components happens through 'BehaviorSubject' which is defined in a separate service. 
   So filter selections are emitted using from the FilterComponent using BehaviorSubject, and LandingPage listens to those the events emitted by that BehaviorSubject and make API call accordingly.
3. The Fetched data is rendered in a grid layout. Grid Layout has been achieved by using 'display:grid' property of CSS.

## Hosting
Application is deployed at- https://launch-info.herokuapp.com/
