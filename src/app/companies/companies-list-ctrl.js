define([
    'angular'
], function (angular) {
    'use strict';

    angular.module('MadeInUa.CompaniesListCtrl', [])
        .controller('CompaniesListCtrl', function($scope) {
            $scope.test = 'hello world!';
        });
});