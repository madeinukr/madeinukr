define([
    'angular',
    'angular-bootstrap',
    'angular-translate',
    'angular-translate-loader-static-files',

    'restangular',

    './routes',

    //local
    'app/locale/switcher/directive'
], function (angular) {
    'use strict';

    var app = angular.module('MadeInUa.Main', [
        'MadeInUa.routes',

        //locale
        'MadeInUa.localeSwitcher',

        //libs
        'pascalprecht.translate',
        'restangular',
        'ui.bootstrap'
    ]);

    app.config(['RestangularProvider', function (RestangularProvider) {
        RestangularProvider.setBaseUrl('config');
    }]);

    app.config(['$translateProvider', function ($translateProvider) {
        //TODO: base local on ip or GPS or Browser settings
//        $translateProvider.preferredLanguage('en_US');
//
//        $translateProvider.useStaticFilesLoader({
//            prefix: 'locale/',
//            suffix: '.json'
//        });
    }]);
});