"use strict";

angular
.module("ProfileApp")
.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/edit",{
        template: "<edit-profile></edit-profile>"
    })
    .when("/profile", {
        template: "<profile></profile>"
    })
    .when("/", {
        template: "<profile></profile>"
    })
}]);