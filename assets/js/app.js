var landing = angular.module("landing", ["ngRoute"]);
 console.log("working");
landing.config(function($routeProvider){
  console.log("and now");
  $routeProvider
    .when("/home",{
      templateUrl: "views/img.html"

    })
    .when("/projects",{
      templateUrl: "views/projects.html"
      
    })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
