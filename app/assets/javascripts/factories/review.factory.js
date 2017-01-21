(function() {
  'use strict'

  function ReviewFactory($http) {
    return {
      getReviews: getReviews
    }

    function getReviews() {
      return $http.get('/reviews')
        .then(handleResponse)
        .catch(handleError)
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
