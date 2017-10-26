(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope,$timeout,$mdMedia,$state) {

    $scope.pageTitle = 'Page Name';
    $scope.isOpen = false;
    $scope.$mdMedia = $mdMedia;
    $scope.timeoutinc = 150;
    $scope.studentlist = ['1','2','3'];
    $scope.pageview = 'app/view/studentlist.html';

    $scope.value = 65;
    $scope.options = {
      displayPrevious: true,
      barCap: 25,
      unit: "%",
      readOnly: true,
      subText: {
        enabled: true,
        text: 'Completed',
        color: 'gray',
        font: 'auto'
      },
      size: 150,
      trackWidth: 20,
      barWidth: 20,
      trackColor: '#ecf1f4',
      prevBarColor: '#d3f4bd',
      barColor: '#67b930',
      textColor: '#000'
      //other options
    };

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.healthgraph = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }
})();
