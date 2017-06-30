import { Customer } from './customer';

import { CUSTOMERS } from './customers.data';

export class CustomerService {
    constructor(private $q: ng.IQService,
                private $timeout: ng.ITimeoutService) { }

    customers(): ng.IPromise<Customer[]> {
        let deferred = this.$q.defer<Customer[]>();
        this.$timeout(() => deferred.resolve(CUSTOMERS.map(it => it)), 700);
        return deferred.promise;
    }

    customer(dni: string): ng.IPromise<Customer> {
        let deferred = this.$q.defer<Customer>();
        let customer = CUSTOMERS.filter(customer => dni === customer.dni)[0];
        this.$timeout(() => deferred.resolve(customer), 700);
        return deferred.promise;
    }

    delete(customer: Customer): ng.IPromise<void> {
        let deferred = this.$q.defer<void>();
        this.$timeout(() => {
            let result = CUSTOMERS.find(other => other.dni === customer.dni);
            if (result) {
                CUSTOMERS.splice(CUSTOMERS.indexOf(result), 1);
                deferred.resolve();
            } else {
                deferred.reject(
                    new Error(`ERROR: customer not found: ${customer}`));
            }
        });
        return deferred.promise;
    }

    static $inject = [ '$q', '$timeout' ];
}
