"use strict";

var app = angular.module("heavyLift", ["ngRoute"]);

let isAuth = function(authFactory){
	return new Promise ((resolve, reject)=>{
		authFactory.isAuthenticated()
		.then((user)=>{
			if(user){
				resolve();
			} else{
				reject();
			}
		});
	});
};

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "homeCtrl"
	})
	.when("/browseExercises", {
		templateUrl: "partials/browseExercises.html",
		controller: "browseCtrl"
	})
	.when("/viewSaved", {
		templateUrl: "partials/viewSaved.html",
		controller: "viewSavedCtrl",
		resolve: {isAuth}
	})
	.when("/createPlan", {
		templateUrl: "partials/createPlan.html",
		controller: "createPlanCtrl",
		resolve: {isAuth}
	})
	.when("/trackProgress",{
		templateUrl: "partials/trackProgress.html",
		controller: "trackProgress.html",
		resolve: {isAuth}
	})
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "loginCtrl"
	})
	.when("/dashboard", {
		templateUrl: "partials/dashboard.html",
		controller: "dashboardCtrl",
		resolve: {isAuth}

	})
	.when("/findExercises", {
		templateUrl: "partials/findExercises",
		controller: "findExercisesCtrl",
		resolve: {isAuth}
	})
	.when("/getDetails/:name",{
		templateUrl: "partials/getDetails.html",
		controller: "getDetailsCtrl",
		resolve: {isAuth}
	})
	.when("/edit/:name", {
		templateUrl: "partials/editDetails.html",
		controller: "editCtrl",
		resolve: {isAuth}
	})
	.otherwise("/");

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