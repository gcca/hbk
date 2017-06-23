import 'angular';
import '@uirouter/angularjs';

import { configRoutes } from './app/config/routes';

import { CustomersModule } from './app/customers/customers.module';

export const app =
    angular
        .module('app', [
            'ui.router',
            CustomersModule.name
        ]);

app
    .config(configRoutes);

angular.element(document).ready(function() {
    angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});
