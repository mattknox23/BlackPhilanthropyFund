/** Home Controller */
angular.module('bpfApp').controller('HomeCtrl', function($scope, $interval, $mdDialog) {
    var newsImage = 'assets/img/calendar-icon.jpg';
    $scope.news = [
        {
            image: newsImage,
            eventName: "The BPF is delighted to welcome Ms. Jeri Robinson to its Board of Trustees. Ms. Robinson serves " +
            "as Vice President for Education and Family Learning at the Boston Children's Museum. She has 35 years of experience " +
            "in teaching and consulting in the field of early childhood education and serves on many boards dealing with family," +
            "community, multicultural, and early childhood education issues."
        },
        {
            image: newsImage,
            date: '23 February 2013',
            eventName: "The BPF Board of Trustees acknowledges the Eastern Bank Community Foundation, Partners Healthcare Systems," +
            "the NEA Foundation, Abt Associates Inc., and the Hunt Alternatives Fund for their generous financial support of the BOSTON" +
            "BASICS CAMPAIGN. Your support and promotion of parenting practices that help build our children's foundations for learning and achievement are greatly appreciated."
        }
    ];
    $scope.slideshow = [
        {
            image: 'assets/img/child-blocks.jpg',
            alt: 'A happy child'
        },
        {
            image: 'assets/img/graduates.jpg',
            alt: 'Proud graduates'
        },
        {
            image: 'assets/img/students-teacher.jpg',
            alt: 'Students and their teacher'
        },
        {
            image: 'assets/img/girl-pointing.jpg',
            alt: 'Group reading'
        },
        {
            image: 'assets/img/teenagers.jpg',
            alt: 'Young adult students'
        }
    ];

    $scope.i = 0;

    $interval(function() {
            $scope.i++;
            if ($scope.i >= $scope.slideshow.length)
                $scope.i = 0;
        },
        3500);

    $scope.showDialog = function(ev) {
        $mdDialog.show({
            template: '<md-dialog>' +
            '<md-dialog-content>' +
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/7LGSjUi9w8k?autoplay=1" frameborder="0" allowfullscreen></iframe>' +
            '</md-dialog-content>' +
            '</md-dialog>',
            targetEvent: ev,
            clickOutsideToClose: true,
            hasBackdrop: false
        });
    }
});
