import { AppComponent } from './app.component';

import { CustomersModule } from './customers/customers.module';

export const AppModule = angular.module('app', [
    'ui.router',
    CustomersModule.name
]);

AppModule.component('app', AppComponent);
