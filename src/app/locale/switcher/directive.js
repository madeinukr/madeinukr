define([
    'angular',
    'text!./template.html',
    'angular-translate'
], function(angular, template) {
    'use strict';

    angular.module('MadeInUa.localeSwitcher', [
            'pascalprecht.translate'
        ])
        .directive('localeSwitcher', function() {
            return {
                template: template,
                controller: ['$http', '$scope', '$translate', function($http, $scope, $translate) {
                    $scope.status = {};

                    $http.get('locale/available.json')
                        .then(function(list) {
                            $scope.available = list.data;
                        });

                    $scope.select = function(lang) {
                        if ($scope.selected === lang) {
                            return;
                        }

                        $scope.selected = lang;
                        $translate.use(lang.name);
                    };

                    $scope.closeDropDown = function() {
                        $scope.status.isOpen = false;
                    };
                }]
            }
        });
});