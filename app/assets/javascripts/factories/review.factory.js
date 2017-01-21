(function() {
  'use strict'

  function reviewFactory($http) {
    return {
      getReviews: getReviews
    }

    function getReviews() {
      return $http.get('/reviews')
        .then(handleResponse)
        .catch(handleError)
    }

    function handleResponse(response) {
      console.log(data)
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }
  }



  angular
    .module('ngDevise')
    .factory('reviewFactory', reviewFactory)
}())
