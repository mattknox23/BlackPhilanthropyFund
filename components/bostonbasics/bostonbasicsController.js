/**  Boston Basics View Controller */
angular.module('bpfApp').controller('BasicsCtrl', function ($scope, $mdDialog) {
    $scope.showVideo = function(ev, source) {
        $mdDialog.show({
            template: '<md-dialog>' +
            '<md-dialog-content>' +
            '<iframe width="560" height="315" src='+ source +' frameborder="0" allowfullscreen></iframe>' +
            '</md-dialog-content>' +
            '</md-dialog>',
            targetEvent: ev,
            clickOutsideToClose: true,
            hasBackdrop: false
        });
    }
});