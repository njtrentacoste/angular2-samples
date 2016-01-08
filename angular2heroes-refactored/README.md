This is a refactored version of the Angular2 Heroes tutorial.

I built three components, heroes, hero and edit-hero to represent the various parts of the application.

To use this repo, clone it then

`npm install`

Open three command prompts

In the first:

`npm run tsc`
(this starts the TypeScript compiler with watch, which watches for changes to the .ts files and re-compiles them.)

In the second:

`npm run data`
(this spins up the json-server module which hosts the heroes.json file)

In the third:

`npm run web`
(this spins up the live-server module which allows for hot reloading of your changes.)