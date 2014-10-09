define([
    'angular',
    'text!./shops/shops-list.tpl.html',
    'text!./shops/shop-details.tpl.html',

    'angular-ui-router',
    'app/shops/shop-details-ctrl',
    'app/shops/shops-list-ctrl'
], function(angular, shopsListTemplate, shopTemplate) {
    'use strict';

    angular.module('MadeInUa.routes', [
            'ui.router',

            'MadeInUa.ShopDetailsCtrl',
            'MadeInUa.ShopsListCtrl'
        ])
        .config(function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/shops');

            $stateProvider
                .state('shops', {
                    url: '/shops',
                    controller: 'ShopsListCtrl',
                    template: shopsListTemplate
                })
                .state('shop', {
                    url: '/shops/:shopId',
                    controller: 'ShopDetailsCtrl',
                    template: shopTemplate,
                    resolve: {
                        shopId: function($stateParams) {
                            return $stateParams.shopId;
                        }
                    }
                });
        });
});