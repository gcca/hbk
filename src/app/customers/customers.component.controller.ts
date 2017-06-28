import { Customer } from './customer/customer';

import { CustomersService } from './customers.service';

export class CustomersComponentController implements ng.IController {

    constructor(private customersService: CustomersService,
                private $scope: ng.IScope & CustomersScope) {
        this.$scope.customers = [];
        this.customersService.customers()
            .then(customers => this.$scope.customers = customers);
    }

    static $inject = [ 'customersService', '$scope' ];
}

export interface CustomersScope {
    customers: Customer[];
}
