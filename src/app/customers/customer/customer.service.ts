import { Customer } from './customer';

import { CUSTOMERS } from '../customers.data';

export class CustomerService {
    constructor(private $q: ng.IQService) { }

    customer(dni: string): ng.IPromise<Customer> {
        let deferred = this.$q.defer<Customer>();
        let customer = CUSTOMERS.filter(customer => dni == customer.dni)[0];
        setTimeout(() => deferred.resolve(customer), 1000);
        return deferred.promise;
    }

    static $inject = [ '$q' ];
}
