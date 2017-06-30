import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { CustomerModule } from './customer/customer.module';
import { PaymentModule } from './payment/payment.module';

export const AppModule = angular.module('app', [
    'ui.router',
    CustomerModule.name,
    PaymentModule.name
]);

AppModule
    .config(AppRoutes)
    .component('app', AppComponent);
