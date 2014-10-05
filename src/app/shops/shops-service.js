define([
    'angular',
    'restangular'
], function (angular) {
    'use strict';

    angular.module('MadeInUa.ShopsService', [
            'restangular'
        ])
        .service('ShopsService', function(Restangular) {
            var api = this;

            /**
             * request list of shops
             * @returns {*}
             */
            api.getList = function() {
                return Restangular.all('shops.json').getList();
            };
        });
});