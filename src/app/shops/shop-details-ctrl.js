define([
    'angular',
    'app/shops/shops-service',
    'app/social/social-contacts'
], function (angular) {
    'use strict';

    angular.module('MadeInUa.ShopDetailsCtrl', [
            'MadeInUa.ShopsService',
            'MadeInUa.SocialContacts'
        ])
        .controller('ShopDetailsCtrl', function($scope, shopId, ShopsService) {
            $scope.shopPromise = ShopsService.getItemById(shopId).then(function(result) {
                $scope.shop = result;
            })
        });
});