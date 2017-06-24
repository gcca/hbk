import { Customer } from './customer/customer';

import { CUSTOMERS } from './customers.data';

export class CustomersService {

    constructor(private $q: ng.IQService) { }

    customers(): ng.IPromise<Customer[]> {
        let deferred = this.$q.defer<Customer[]>();
        setTimeout(() => deferred.resolve(CUSTOMERS), 800);
        return deferred.promise;
    }

    static $inject = [ '$q' ];
}
