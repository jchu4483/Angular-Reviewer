(function () {
  'use strict'

  var reviews = {
    transclude: true,
    controller: ReviewComponentController,
    templateUrl: 'components/reviews/reviews.html'
  }

  function ReviewComponentController(ReviewFactory) {
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

  angular
    .module('ngDevise')
    .component('reviews', reviews)
}())
