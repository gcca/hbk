import { Customer } from '../customer/customer';

export class PaymentService {

    constructor(private $q: ng.IQService,
                private $timeout: ng.ITimeoutService) { }

    pay(options: PayOptions): ng.IPromise<Voucher> {
        let deferred = this.$q.defer<Voucher>();
        this.$timeout(() => deferred.resolve({ transferId: 'abc123' }), 750);
        return deferred.promise;
    }

    static $inject = [ '$q', '$timeout' ];
}

interface PayOptions {
    customer: Customer;
    amount: number;
}

interface Voucher {
    transferId: string;
}
