import { Customer } from './customer';

export const CustomerComponent: ng.IComponentOptions = {
    template: '<p>Hello, {{ $ctrl.user.name }} !</p>',
    controller: function() {
        let customer: Customer = {
            dni: '12345678',
            name: 'Cliente N1'
        };

        this.customer = customer;
    }
};
