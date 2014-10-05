define([
    'angular',
    'text!./companies/companies.tpl.html',

    'angular-ui-router',
    'app/companies/companies-list-ctrl'
], function(angular, companiesListTemplate) {
    'use strict';

    angular.module('MadeInUa.routes', [
            'ui.router'
        ])
        .config(function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/companies');

            $stateProvider
                .state('companies', {
                    url: '/companies',
                    controller: 'CompaniesListCtrl',
                    template: companiesListTemplate
                });
        });
});