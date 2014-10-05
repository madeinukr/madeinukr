define([
    'angular',
    './shops-service'
], function (angular) {
    'use strict';

    angular.module('MadeInUa.ShopsListCtrl', [
            'MadeInUa.ShopsService'
        ])
        .controller('ShopsListCtrl', function($scope, ShopsService) {
            $scope.shopsListPromise = ShopsService.getList().then(function(result) {
                $scope.listOfShops = result;
            })
        });
});