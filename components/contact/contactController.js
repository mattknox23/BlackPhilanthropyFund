/**  Contact View Controller */
angular.module('bpfApp').controller('ContactCtrl', function ($scope) {
    $scope.message = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    $scope.sendEmail = function(name, subject, message) {
        var link = "mailto:info@BPFforImpact.org"
        + "?subject=" + encodeURI(subject)
        + "&body=" + encodeURI(message)
        + "%0D%0A%0D%0ASincerely,%0D%0A " + encodeURI(name);

        if ($scope.userForm.$valid) {
            window.location.href = link;
        }
    }
});