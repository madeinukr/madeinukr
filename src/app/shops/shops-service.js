define([
    'angular',
    'lodash',

    'restangular'
], function (angular, _) {
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

            /**
             * request one shop by Id
             * @param id
             */
            api.getItemById = function(id) {
               return Restangular.all('shops.json').getList().then(function(response) {
                   return _(response).find({id: parseInt(id)});
               });
            }
        });
});