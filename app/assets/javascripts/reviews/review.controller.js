(function() {
  'use strict'

  function ReviewController(ReviewFactory, $stateParams) {
    var ctrl = this

    activate()

    function activate() {
      getReviews()
    }

    function getReviews() {
      return ReviewFactory.getReviews()
        .then(setReviews)
    }

    function showReview() {
      ReviewFactory.setReview($stateParams.id)
      console.log($stateParams.id)
    }

    function setReviews(data) {
      ctrl.reviews = data
    }
  }


  angular
    .module('ngDevise')
    .controller('ReviewController', ReviewController)
}())
