import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers.component';
import { CustomerService } from './customer.service';

export const CustomerModule = angular.module('app.customer', []);

CustomerModule
    .component('customer', CustomerComponent)
    .component('customers', CustomersComponent)
    .service('customerService', CustomerService);
