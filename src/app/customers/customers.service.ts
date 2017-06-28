import { Customer } from './customer/customer';

import { CUSTOMERS } from './customers.data';

export class CustomersService {

    constructor(private $q: ng.IQService,
                private $timeout: ng.ITimeoutService) { }

    customers(): ng.IPromise<Customer[]> {
        let deferred = this.$q.defer<Customer[]>();
        this.$timeout(() => deferred.resolve(CUSTOMERS), 700);
        return deferred.promise;
    }

    static $inject = [ '$q', '$timeout' ];
}
