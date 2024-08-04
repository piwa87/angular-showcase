# ATFrontendCommon

```
WIP:
README.md bliver opdateret løbende i takt med projektets udvikling.
Sidst opdateret: 23-07-2024
```

## Introduktion

Denne repository er en Angular common workspace som indeholder en række libraries og en applikation. Vi følger anbefalingerne fra https://angular.dev/reference/configs/file-structure#multiple-projects for håndtering af flere projekter.

Libraries indeholder genanvendelige components, services, directives, pipes, diverse utilities, samt et styling library med et at-angular-theme. Der findes til dags dato følgende libraries i mappen `projects`:

```
- @at-common/auth       (Auth service med tilhørende funktionalitet)
- @at-common/forms      (Forms components)
- @at-common/servies    (Servives)
- @at-common/styling    (AT's custom angular matertial theme + CSS classes)
- @at-common/texts      (Styles AT texts, som f.eks. <h1>, <h2>, etc...)
- @at-common/utils      (Diverse utilities funktioner f.eks. date functions)
```

Projektet `at-common-examples` viser hvordan de udstillede elementer fra `@at-common` libraries bruges. Inden projektet startes, anbefaler vi at bygge alle libraries, som bruges af projektet med denne command:
`npm run build-libs`

Og herefter start projektet med: `npm run examples`

## Node.js, Angular CLI

Projekterne gør brug af angular CLI, som kræver node.js, så hvis disse ikke er installeret lokalt, så gøres dette som det første. For windows udviklere kan denne https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows følges for opsætning af node.

Følg instrukserne fra https://angular.dev/tools/cli/setup-local for at installere angular cli'en og læs om hvordan den bruges.

Husk også at installere alle NPM pakker, som alle libraries og projektet bruges: `npm install` i repo's root folder.

## Nyt library

Steps for at tilføje et nyt library til projektet:

1. Åbn terminal og brug Angular CLI til at oprette nyt library: `ng g library @at-common/<library_name>`
2. Kopiér `karma.conf.js` filen fra et andet library ind i det nye librarys root folder og tilpas linjen 28: `dir: require('path').join(__dirname, './coverage/AtCommon<library_name>'),`
3. I root (`/ATFrontendCommon/package.json`) tilføj projektet til scripts:
   - Til eksisterende script: `"build-libs"` tilføj: `ng build --project @at-common/<library_name>`
   - Tilføj også en ny script: `"<library_name>": "ng build --watch --project @at-common/<library_name>"`
4. I root (`/ATFrontendCommon/angular.json`) find det nye library's objekt og tilføj `karmaConfig` path under `architect -> test -> options`: `"karmaConfig": "projects/at-common/<library_name>/karma.conf.js"` (På samme måde som for de andre libraries)

## Opsætning til udvikling af et library:

Når man er i gang med at udvikle et library, og ønsker at kunne se ændringer løbende, forslår vi at:

1. Start library projektet i watch-mode: `npm run <library_name>` (Script, som blev oprettet ved opsærning af nyt library under punkt 3)
2. Derefter i et andet terminal vindue start at-common-examples projektet: `npm run examples`.

Gemte ændringer i library's kode vil nu få examples projektet til at genindlæse, så de kan ses med det samme.
