import { Customer } from './customer';

export class CustomerService {
    constructor(private $http: ng.IHttpService,
                private $q: ng.IQService) { }

    customers(): ng.IPromise<Customer[]> {
        let deferred = this.$q.defer<Customer[]>();
        this.$http.get<Customer[]>('http://localhost:8000/customer')
            .then(http => {
                deferred.resolve(http.data);
            })
            .catch(() => {
                // ...
            });
        return deferred.promise;
    }

    customer(dni: string): ng.IPromise<Customer> {
        let deferred = this.$q.defer<Customer>();
        this.$http.get<Customer>(`http://localhost:8000/customer/${dni}`)
            .then(http => {
                deferred.resolve(http.data);
            });
        return deferred.promise;
    }

    delete(customer: Customer): ng.IPromise<void> {
        let deferred = this.$q.defer<void>();
        this.$http
            .delete<void>(`http://localhost:8000/customer/${customer.dni}`)
            .then(http => {
                deferred.resolve();
            });
        return deferred.promise;
    }

    static $inject = [ '$http', '$q' ];
}
