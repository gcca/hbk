import { CustomerComponent } from './customer.component';

export const CustomerModule = angular.module('app.customers.customer', []);

CustomerModule
    .component('customer', CustomerComponent);
