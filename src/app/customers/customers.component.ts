import { CustomersComponentController } from './customers.component.controller';

export const CustomersComponent: ng.IComponentOptions = {
    controller: CustomersComponentController,
    template: `
    <h4>Clientes</h4>
    <ul>
        <li ng-repeat="customer in customers">
            <a ui-sref="customer({ dni: customer.dni })">
                {{ customer.name }}
            </a>
        </li>
    </ul>
    `
};
