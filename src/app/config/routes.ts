configRoutes.$inject = ['$stateProvider'];

export function configRoutes($stateProvider: ng.ui.IStateProvider): void {
    let helloState = {
        name: 'main',
        url: '/main',
        template: '<h3>hello world!</h3>'
    };

    let aboutState = {
        name: 'customers',
        url: '/customers',
        template: '<customers></customers>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}
