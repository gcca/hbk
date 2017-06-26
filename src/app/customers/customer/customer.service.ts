import { Customer } from './customer';

import { CUSTOMERS } from '../customers.data';

export class CustomerService {
    constructor(private $q: ng.IQService,
                private $timeout: ng.ITimeoutService) { }

    customer(dni: string): ng.IPromise<Customer> {
        let deferred = this.$q.defer<Customer>();
        let customer = CUSTOMERS.filter(customer => dni == customer.dni)[0];
        this.$timeout(() => deferred.resolve(customer), 700);
        return deferred.promise;
    }

    static $inject = [ '$q', '$timeout' ];
}
