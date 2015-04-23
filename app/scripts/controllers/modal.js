'use strict';

angular.module('epicoverflowApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, error, config) {
    $scope.error = error;
    $scope.ok = function() {
        if('access_token_required' === error.error_name){ //jshint ignore:line
            window.location = '/'+config.uriBase;
        }
        $modalInstance.close();
    };
});