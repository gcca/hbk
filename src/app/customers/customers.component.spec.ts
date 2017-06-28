import { CustomersComponent } from './customers.component';
import { CustomersComponentController, CustomersScope }
    from './customers.component.controller';
import { CustomersService } from './customers.service';

import { Customer } from './customer/customer';

import { UtilsService } from '../../testing/utils';

angular.module('test.customers', [])
    .component('customers', CustomersComponent)
    .service('utils', UtilsService);

describe('CustomersComponent', () => {
    describe('with two customers', () => {
        let customersComponentController: CustomersComponentController,
            $scope: ng.IScope;

        beforeEach(angular.mock.module('test.customers'));

        beforeEach(angular.mock.module(($provide: ng.auto.IProvideService) => {
            $provide.value('customersService', {
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

        it('should have two customers', () => {
            expect($scope.customers.length).toBe(2);
        });
    });
});

type ComponentController = ng.IComponentControllerService;
