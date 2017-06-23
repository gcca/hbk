import { Customer } from './customer/customer';

const CUSTOMERS: Customer[] = [{
    dni: '11111111',
    name: 'Cliente N1',
}, {
    dni: '22222222',
    name: 'Cliente N2'
}, {
    dni: '33333333',
    name: 'Cliente N3'
}];

export class CustomersService {
    customers() {
        return {
            then(callback: Function) {
                setTimeout(() => callback(CUSTOMERS), 3000);
            }
        };
    }
}
