(function () {
  'use strict'

  angular
    .module('ngDevise')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController as vm'
      })
      .state('home.reviews', {
        url: '/reviews',
        templateUrl: 'reviews/reviews.html',
        controller: 'ReviewController as vm'
      })
      .state('home.review', {
        url: '/review/:id',
        templateUrl: 'reviews/review.html',
        controller: 'ReviewController as vm'
      })

      $urlRouterProvider.otherwise('/')
    })
}())
