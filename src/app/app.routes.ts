export const mainState = {
    name: 'main',
    url: '/main',
    template: '<h3>AppMain</h3>'
};

export const customersState = {
    name: 'customers',
    template: '<customers><customers>',
    url: '/customers'
};

export const customerEditState = {
    name: 'customer',
    url: '/customer/:dni',
    template: '<customer></customer>'
};

export const paymentState = {
    name: 'payment',
    url: '/payment',
    template: '<payment></payment>'
};

const appStates: ng.ui.IState[] = [
    customersState,
    customerEditState,
    mainState,
    paymentState
];

AppRoutes.$inject = [ '$stateProvider' ];

export function AppRoutes($stateProvider: ng.ui.IStateProvider) {
    appStates.forEach(state => $stateProvider.state(state));
}
