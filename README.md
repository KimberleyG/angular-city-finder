# KeyCityFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

# Demande

Tu devras réaliser une application Angular comportant :

- un premier composant / page permettant d’effectuer une recherche sur une région via un formulaire.

- un second composant / page permettant d'afficher la liste des communes d'un département.

- Au moins un test unitaire devra être écrit.

Le code produit devra être publié sur un repo github ou un équivalent.


## Premier composant :

- Le formulaire comporte un champ permettant de saisir le nom d’une région, ex : Normandie. Ce champ proposera le nom des régions en autocomplétion.

- L’utilisateur peut alors sélectionner une région.

- Pour la région sélectionnée, on récupère le code de la région.

- Une liste de tous les départements de la région sera affichée en dessous de la textbox.

- Si l'utilisateur clique sur un des départements de la liste on naviguera vers le second composant.

 
## Second composant :

- Permet d'afficher la liste des communes du département sélectionné via son code département.


## Support technique :

Trois APIs seront appelées :

- la première permettant de récupérer le nom des régions pour l’autocomplétion:

       https://geo.api.gouv.fr/regions?nom=nomDeLaRegion

- La deuxième permettant de récupérer la liste des départements d’une région :

       https://geo.api.gouv.fr/regions/{code région}/departements

- La troisième permettant de récupérer la liste des communes d’un départements :

       https://geo.api.gouv.fr/departements/{code departement}/communes




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
