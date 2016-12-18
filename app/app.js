"use strict";

var app = angular.module("heavyLift", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "homeCtrl"
	});

}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});



app.run( ($location, FBInfo)=>{
	let authConfig = {
		apiKey: FBInfo.apiKey,
		authDomain: FBInfo.authDomain
	};
	firebase.initializeApp(authConfig);
});