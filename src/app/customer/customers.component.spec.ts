import { CustomersComponent } from './customers.component';
import { CustomersComponentController, CustomersScope }
    from './customers.component.controller';
import { CustomerService } from './customer.service';

import { Customer } from './customer';

import { UtilsService } from '../../testing/utils';

angular.module('test.customer', [])
    .component('customers', CustomersComponent)
    .service('utils', UtilsService);

describe('CustomersComponent', () => {
    describe('with two customers', () => {
        let customersComponentController: CustomersComponentController,
            $scope: ng.IScope;

        beforeEach(angular.mock.module(
            'test.customer', ($provide: ng.auto.IProvideService) => {

            // TODO: improve type checking on {mock,stub}ing services
            $provide.value('customerService', {
                customers() {
                    return {
                        then: (cb: any) => cb([{
                            dni: '12345678',
                            name: 'customer1'
                        }, {
                            dni: '87654321',
                            name: 'customer2'
                        }])
                    };
                }
            });
        }));

        beforeEach(inject(($componentController: ComponentController,
                           $rootScope: ng.IRootScopeService,
                           utils: UtilsService) => {
            $scope = utils.$newScope<CustomersScope>({
                customers: []
            });

            customersComponentController =
                $componentController<CustomersComponentController, {}>(
                    'customers', { $scope }, {});
        }));

        it('should start with a customer collection', () => {
            // TODO: this must be test when `customerService` is a dummy
            expect($scope.customers).not.toBeNull();
            expect($scope.customers.length).toBeDefined();
        });

        it('should have two customers', () => {
            expect($scope.customers.length).toBe(2);
        });
    });
});

type ComponentController = ng.IComponentControllerService;
