var app = angular.module("myApp", []);
app.directive("bodyClass", function() {
    return {
        restrict : "C",
        template : "container bg-dark text-white my-5"
    };
});