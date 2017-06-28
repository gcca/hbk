import { configRoutes } from './app/config/routes';

import { AppModule } from './app/app.module';

AppModule
    .config(configRoutes);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, [ AppModule.name ], {
        strictDi: true
    });
});
