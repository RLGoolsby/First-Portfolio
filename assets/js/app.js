var landing = angular.module("landing", ["ngRoute"]);
 console.log("working");
landing.config(function($routeProvider){
  console.log("and now");
  $routeProvider
    .when("/home",{
      templateUrl: "views/img.html"
      // controller: "LandingController"
    })
    .when("/about",{
      templateUrl: "views/about.html"
      // controller: "LandingController"
    })
    .when("/projects",{
      templateUrl: "views/projects.html"
      // controller: "LandingController
    })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
