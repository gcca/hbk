import 'angular';
import '@uirouter/angularjs';

export const app = angular.module('app', ['ui.router']);

routesConfig.$inject = ['$stateProvider'];

function routesConfig($stateProvider: any) {
    var helloState = {
        name: 'main',
        url: '/main',
        template: '<h3>hello world!</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}

app.config(routesConfig);

angular.element(document).ready(function() {
    angular.bootstrap(document.body, [ app.name ], {
        strictDi: true
    });
});
