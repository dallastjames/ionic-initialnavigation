# Delay Initial Navigation #

## Steps to Implement ##

* In the app-routing module, disable the initial navigation with `initialNavigation: 'disabled'` (line 17)
* In the app.component.ts file, await any of the services that you need to before calling `this.router.initialNavigation();` (lines 25-33)
* In the app.component.html file, add any code you like to provide an indicator that the app is loading

### `npm start` to demo this application ###