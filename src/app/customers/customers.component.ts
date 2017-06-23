import { Customer } from './customer/customer';

import { CustomersService } from './customers.service';

CustomersController.$inject = ['customersService', '$scope'];

function CustomersController(customersService: CustomersService,
                             $scope: any) {
    customersService.customers()
        .then((customers: Customer[]) => {
            $scope.$apply(() => {
                $scope.customers = customers
            });
        });
}

export const CustomersComponent: ng.IComponentOptions = {
    template: `
    <h4>Clientes</h4>
    <ul>
        <li ng-repeat="customer in customers">
            {{ customer.name }}
        </li>
    </ul>
    `,
    controller: CustomersController
};
