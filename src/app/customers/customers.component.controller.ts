import { Customer } from './customer/customer';

import { CustomersService } from './customers.service';

export class CustomersComponentController implements ng.IController {

    constructor(private customersService: CustomersService,
                private $scope: Scope) {
        this.$scope.customers = [];
        this.customersService.customers()
            .then(customers => this.$scope.customers = customers );
    }

    static $inject = [ 'customersService', '$scope' ];
}

interface Scope extends ng.IScope {
    customers: Customer[];
}
