export class UtilsService {
    constructor(private $rootScope: ng.IRootScopeService) { }

    $newScope<T>(extra: {[index: string]: ScopeAttribute}): T {
        // FUCK: Bad type checking implementation
        return angular.extend(this.$rootScope.$new(), extra) as T;
    }
}

// TODO(gcca): fix `any[]` by generic aggregate
type ScopeAttribute = any[] | Date | number | string;
