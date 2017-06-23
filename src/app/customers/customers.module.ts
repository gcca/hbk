import { CustomersComponent } from './customers.component';
import { CustomersService } from './customers.service';

import { CustomerModule } from './customer/customer.module';

export const CustomersModule =
    angular
        .module('app.customers',
                [
                    CustomerModule.name
                ]);

CustomersModule
        .component('customers', CustomersComponent)
        .service('customersService', CustomersService);
