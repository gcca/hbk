import { CustomerService } from './customer.service';

angular.module('test.customers.customer', [])
    .service('customerService', CustomerService);

describe('CustomerService', () => {
    let customerService: CustomerService,
        $rootScope: ng.IRootScopeService,
        $timeout: ng.ITimeoutService;

    beforeEach(angular.mock.module('test.customers.customer'));

    beforeEach(inject((_customerService_: CustomerService,
                       _$rootScope_: ng.IRootScopeService,
                       _$timeout_: ng.ITimeoutService) => {
        customerService = _customerService_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
    }));

    it('find a customer by DNI', done => {
        customerService.customer('11111111').then(customer => {
            expect(customer.dni).not.toBeNull();
            expect(customer.name).not.toBeNull();
            done();
        }).catch(() => {
            console.info('ERROR');
            done();
        });
        $timeout.flush();
    });
});
