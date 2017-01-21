(function() {
  'use strict'

  function ReviewController(ReviewFactory) {
    var ctrl = this

    ctrl.hello = "hello!"

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
    .controller('ReviewController', ReviewController)
}())
