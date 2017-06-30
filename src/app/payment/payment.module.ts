import { PaymentComponent } from './payment.component';
import { PaymentService } from './payment.service';

import { CustomerService } from '../customer/customer.service';

export const PaymentModule = angular.module('app.payment', []);

PaymentModule
    .component('payment', PaymentComponent)
    .service('customerService', CustomerService)
    .service('paymentService', PaymentService)
;
