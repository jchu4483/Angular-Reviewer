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
      return ReviewFactory.setReview(id)
    }

    function setReviews(data) {
      ctrl.reviews = data
    }
  }


  angular
    .module('ngDevise')
    .controller('ReviewController', ReviewController)
}())
