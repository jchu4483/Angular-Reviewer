(function() {
  'use strict'

  function ReviewFactory($http) {
    return {
      getReviews: getReviews,
      createReview: createReview,
      setReview: setReview
    }

    function getReviews() {
      return $http.get('/reviews')
        .then(handleResponse)
        .catch(handleError)
    }

    function createReview(content) {
      var req = {
        method: 'POST',
        url: '/reviews',
        headers: {
          'Content-Type': undefined
        },
        data: {content}
      }
      return $http(req)
    }

    function setReview(id) {
      return $http.get('/reviews' + id)
        .then(handleResponse)
    }

    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }
  }



  angular
    .module('ngDevise')
    .factory('ReviewFactory', ReviewFactory)
}())
