define([
    'angular',
    'lodash',
    'text!./social-contacts.tpl.html'
], function (angular, _, template) {
    'use strict';

    angular.module('MadeInUa.SocialContacts', [])
        .controller('SocialContactsCtrl', function($scope) {
            var buttons = {
                'fb': 'btn-facebook',
                'ig': 'btn-instagram',
                'vk': 'btn-vk'
            }, icons = {
                'fb': 'fa-facebook',
                'ig': 'fa-instagram',
                'vk': 'fa-vk'
            };

            $scope.$watch('socialContacts', function(newValue) {
                $scope.list = _(newValue)
                    .map(function(url, key) {
                        return {
                            url: url,
                            button: buttons[key],
                            icon: icons[key]
                        }
                    })
                    .value();
            });
        })
        .directive('socialContacts', function() {
            return {
                scope: {
                    'socialContacts': '='
                },
                template: template,
                controller: 'SocialContactsCtrl'
            }
        })
});