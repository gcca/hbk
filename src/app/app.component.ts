import { AppComponentController } from './app.component.controller';

export const AppComponent: ng.IComponentOptions = {
    controller: AppComponentController,
    template: `
    <div class="menu">
        <a ui-sref="main" ui-sref-active="active">main</a>
        <a ui-sref="customers" ui-sref-active="active">customers</a>
        <ui-view></ui-view>
    </div>
    `
};
