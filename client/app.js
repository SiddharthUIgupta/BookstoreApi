var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'BooksCntroller',
    templateUrl: 'views/books.html'
  })
  .when('/boosk', {
    controller: 'BooksCntroller',
    templateUrl: 'views/books.html'
  })
  .when('/books/details/:id', {
    controller: 'BooksCntroller',
    templateUrl: 'views/book_details.html'
  })
  .when('/books/add', {
    controller: 'BooksCntroller',
    templateUrl: 'views/add_book.html'
  })
  .when('/books/edit/:id', {
    controller: 'BooksCntroller',
    templateUrl: 'views/edit_book.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
