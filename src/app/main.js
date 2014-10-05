requirejs.config({
    baseUrl: '',
    paths: {
        'app': 'app',
        'angular': 'libs/angular/angular',
        'angular-animate': 'libs/angular-animate/angular-animate',
        'angular-bootstrap': 'libs/angular-bootstrap/ui-bootstrap-tpls',
        'angular-busy': 'libs/angular-busy/dist/angular-busy',
        'angular-google-maps': 'libs/angular-google-maps/dist/angular-google-maps',
        'angular-sanitize': 'libs/angular-sanitize/angular-sanitize',
        'angular-toaster': 'libs/AngularJS-Toaster/toaster',
        'angular-translate': 'libs/angular-translate/angular-translate',
        'angular-translate-loader-static-files': 'libs/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angular-ui-router': 'libs/angular-ui-router/release/angular-ui-router',
        'lodash': 'libs/lodash/dist/lodash',
        'restangular': 'libs/restangular/dist/restangular',
        'text': 'libs/requirejs-text/text'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-busy': {
            deps: ['angular']
        },
        'angular-google-maps': {
            deps: ['angular']
        },
        'angular-ngFacebook': {
            deps: ['angular']
        },
        'angular-recaptcha': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-toaster': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'angular-translate-loader-static-files': {
            deps: ['angular', 'angular-translate']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'restangular': {
            deps: ['angular', 'lodash']
        }
    },
    map: {
        '*': {
            'css': 'libs/require-css/css'
        }
    }
});

requirejs(['angular', 'app/app'], function (angular) {
    'use strict';
    try {
        angular.bootstrap(document, ['MadeInUa.Main']);
    } catch(e) {
        console.error(e.stack || e.message || e);
    }
});