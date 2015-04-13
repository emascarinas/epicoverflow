'use strict';

angular.module('epicoverflowApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, error) {
    $scope.error = error;
    $scope.ok = function() {
        $modalInstance.close();
    };
});