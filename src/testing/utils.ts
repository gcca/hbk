export class UtilsService {
    constructor(private $rootScope: ng.IRootScopeService) { }

    $newScope<T>(extra: T): ng.IScope {
        // FUCK: Bad type checking implementation
        return angular.extend(this.$rootScope.$new(), extra as any);
    }
}
