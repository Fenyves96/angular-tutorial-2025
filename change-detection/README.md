What is change detection?
A mechanism that tracks changes in the application state and synchronizes those changes with the application view.
We can split it into two parts:
1) View Checking
 Synchronization of the compoenent view with the data model.
2) Re-run View checking (1. process)
   Automatically re-execute the View Checking when application state might change.

How angular uses zone.js?
1) as a dependency in package-json
2) import in polyfills in angular json
3) import in main.ts or in polyfills.ts
4) in main.ts or in appconfig: provideZoneChangeDetection()

In order to connect view and data models we are using such a thing called: binding.
There are different kind of bindings, like:
- string interpolation (`<h2>{{variableName}}</h2>`)
- property binding (`<component [component-variable] = "myvariable"/>`)
- event binding ... etc


Automated View checking, Zone.js

What does it mean zone an zoneless?
What does Zone js do?
