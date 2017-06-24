import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

export const CustomerModule = angular.module('app.customers.customer', []);

CustomerModule
    .component('customer', CustomerComponent)
    .service('customerService', CustomerService);
