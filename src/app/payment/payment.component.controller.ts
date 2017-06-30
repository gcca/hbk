import { PaymentService } from './payment.service';

import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

export class PaymentComponentController implements ng.IController {

    constructor(private customerService: CustomerService,
                private paymentService: PaymentService,
                private $scope: PaymentScope) {
        this.$scope.customers = [];
        this.$scope.data = {
            amount: '0',
            customerDni: null
        };

        this.customerService.customers()
            .then(customers => {
                this.$scope.customers = customers;
                this.$scope.data.customerDni = customers[0].dni;
            });
    }

    pay() {
        let customer =
            this.$scope.customers.filter(
                customer => this.$scope.data.customerDni == customer.dni)[0];
        this.paymentService.pay({
            amount: +this.$scope.data.amount,
            customer
        }).then(voucher => this.$scope.transferId = voucher.transferId);
    }

    static $inject = [ 'customerService', 'paymentService', '$scope' ];
}

export interface PaymentScope extends ng.IScope {
    data: {
        amount: string;
        customerDni: string | null;
    };
    transferId: string;
    customers: Customer[];
}
