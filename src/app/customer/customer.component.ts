import { Customer } from './customer';

import { CustomerComponentController } from './customer.component.controller';

export const CustomerComponent: ng.IComponentOptions = {
    controller: CustomerComponentController,
    templateUrl: 'app/customer/customer.html'
};
