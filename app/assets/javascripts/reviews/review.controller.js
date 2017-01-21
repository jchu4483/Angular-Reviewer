(function() {
  'use strict'

  function ReviewController(ReviewFactory) {
    var ctrl = this

    activate()

    function activate() {
      getReviews()
    }

    function getReviews() {
      return ReviewFactory.getReviews()
        .then(setReviews)
    }

    function setReviews(data) {
      ctrl.reviews = data
    }
  }

  ReviewController.$inject = ['$scope']

  angular
    .module('ngDevise')
    .controller('ReviewController', ReviewController)
}())
