(function() {
  'use strict';

  angular.module('nextHealthCare')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $state, dataService, baseurls) {
    // init controller
    $scope.init = function(){
      $scope.getGraphDetails();
      $scope.getStudentDetails();
      $(['ng-nicescroll']).getNiceScroll().resize();
    };

    $scope.getGraphDetails = function(){
      var url = baseurls.url + "getDashboardDetails";
      var data = {};
      dataService.getDetails(url, data).then(function(response){
        if(response){
          $scope.generateGraph(response);
        }
      });
    }
    $scope.generateGraph = function(response){
      var graphData = [
          20, 30, 50, 60, 30
      ];
      var graphLabels = [
        'Jan', 'Feb', 'March', 'April', 'May'
      ];
      $scope.data = [];
      // angular.forEach(response, function(data){
      //     if(data.month){
      //       graphLabels.push(data.month);
      //     }
      //     if(data.students){
      //       graphData.push(data.students);
      //     }
      // });
      $scope.labels = graphLabels;
      $scope.series = ['Health Report'];
      $scope.data.push(graphData);
    }

    $scope.getStudentDetails = function(){
      var url = baseurls.url + "getStudentDetails";
      var data = {};
      dataService.getDetails(url, data).then(function(response){
        if(response){
          $scope.studentlist = response;
        }
      });
    }

    $scope.init();

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
    $scope.viewStudent = function(student){
      $state.go('dashboard.studentview', {student: student})
    }

    
  }
})();
