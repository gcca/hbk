configRoutes.$inject = [ '$stateProvider' ];

export function configRoutes($stateProvider: ng.ui.IStateProvider): void {
    let mainState = {
        name: 'main',
        url: '/main',
        template: '<h3>hello world!</h3>'
    };

    let customersState = {
        name: 'customers',
        url: '/customers',
        template: '<customers></customers>'
    };

    let customerState = {
        name: 'customer',
        url: '/customer/:dni',
        template: '<customer></customer>'
    };

    $stateProvider.state(mainState);
    $stateProvider.state(customersState);
    $stateProvider.state(customerState);
}
