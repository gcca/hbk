import { Customer } from './customer';

import { CustomerService } from './customer.service';

export class CustomerComponentController implements ng.IComponentController {
    constructor(private customerService: CustomerService,
                private $scope: Scope,
                private $stateParams: ng.ui.IStateParamsService) {
        this.$scope.customer = {
            dni: '',
            name: ''
        };
        let dni = this.$stateParams.dni;
        this.customerService.customer(dni)
            .then(customer => this.$scope.customer = customer);
    }

    static $inject = [ 'customerService', '$scope', '$stateParams' ];
}

interface Scope extends ng.IScope {
    customer: Customer;
}
