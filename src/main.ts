import { AppModule } from './app/app.module';

angular.element(document).ready(() => {
    angular.bootstrap(document.body, [ AppModule.name ], {
        strictDi: true
    });
});
