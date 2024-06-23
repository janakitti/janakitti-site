# Janakitti

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

First build the app, then run `firebase deploy`.

### Note to developer:

- You need add Angular Fire via `ng add @angular/fire` after initializing the firebase app
- Then, you need to make sure that the following object is added under `projects/janakitti/architect` in the `angular.json` tree:

```
        "deploy": {
          "builder": "@angular/fire:deploy",
          "options": {}
        }

```
