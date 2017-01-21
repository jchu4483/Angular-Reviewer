(function() {
  'use strict'

  function ReviewController($scope) {
    $scope.name = 'Jason is reviewing!'
  }

  ReviewController.$inject = ['$scope']

  angular
    .module('ngDevise')
    .controller('ReviewController', ReviewController)
}())
