import { Customer } from './customer';

import { CustomerService } from './customer.service';

export class CustomersComponentController implements ng.IController {

    constructor(private customerService: CustomerService,
                private $scope: CustomersScope) {
        this.$scope.customers = [];
        this.customerService.customers()
            .then(customers => this.$scope.customers = customers);
    }

    remove(customer: Customer) {
        this.customerService.delete(customer).then(() => {
            let index = this.$scope.customers.indexOf(customer);
            this.$scope.customers.splice(index , 1);
        });
    }

    static $inject = [ 'customerService', '$scope' ];
}

export interface CustomersScope extends ng.IScope {
    customers: Customer[];
}
