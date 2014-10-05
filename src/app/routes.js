define([
    'angular',
    'text!./shops/shops.tpl.html',

    'angular-ui-router',
    'app/shops/shops-list-ctrl'
], function(angular, shopsListTemplate) {
    'use strict';

    angular.module('MadeInUa.routes', [
            'ui.router',

            'MadeInUa.ShopsListCtrl'
        ])
        .config(function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/shops');

            $stateProvider
                .state('shops', {
                    url: '/shops',
                    controller: 'ShopsListCtrl',
                    template: shopsListTemplate
                });
        });
});