import { CustomerService } from './customer.service';

angular.module('test.customer', [])
    .service('customerService', CustomerService);

describe('CustomerService', () => {
    let customerService: CustomerService,
        $httpBackend: ng.IHttpBackendService,
        $rootScope: ng.IRootScopeService;

    beforeEach(angular.mock.module('test.customer'));

    beforeEach(inject((_customerService_: CustomerService,
                       _$httpBackend_: ng.IHttpBackendService,
                       _$rootScope_: ng.IRootScopeService) => {
        customerService = _customerService_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    it('find a customer by DNI', done => {
        $httpBackend.expectGET(/.*\/customer\/11111111/).respond({
            dni: '11111111',
            name: 'Cliente'
        });
        customerService.customer('11111111').then(customer => {
            expect(customer.dni).not.toBeNull();
            expect(customer.name).not.toBeNull();
            done();
        }).catch(() => {
            console.info('ERROR');
            done();
        });
        $httpBackend.flush();
    });
});
