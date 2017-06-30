import { Customer } from '../customer/customer';

export class PaymentService {

    constructor(private $http: ng.IHttpService,
                private $q: ng.IQService) { }

    pay(options: PayOptions): ng.IPromise<Voucher> {
        let deferred = this.$q.defer<Voucher>();
        this.$http.post<Voucher>('http://localhost:8000/payment', options)
            .then(http => {
                deferred.resolve(http.data);
            });
        return deferred.promise;
    }

    static $inject = [ '$http', '$q' ];
}

interface PayOptions {
    amount: number;
    customer: Customer;
}

interface Voucher {
    amount: number;
    customerDni: string;
    transferId: string;
}
