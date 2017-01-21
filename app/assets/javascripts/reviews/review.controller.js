(function() {
  'use strict'

  function ReviewController(reviewFactory) {
    var ctrl = this

    ctrl.hello = "hello!"

    activate()

    function activate() {
      getReviews()
    }

    function getReviews() {
      return reviewFactory.getReviews()
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
