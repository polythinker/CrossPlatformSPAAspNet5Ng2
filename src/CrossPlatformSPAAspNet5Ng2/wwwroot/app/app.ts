import {provide, Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'photogallery-app',
    templateUrl: './app/app.html',
    //template: `
    //<h1>Hahaha</h1>
    //`,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class AppRoot {
    constructor() {
    } 
}

bootstrap(AppRoot);