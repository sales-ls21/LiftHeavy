"use strict";

app.controller("homeCtrl", function($location, mainDataFactory, $scope, authFactory){

	let user = authFactory.getUser();

	$scope.movements = [];

	$scope.getSample = ()=>{
		mainDataFactory.getSampleMovements()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};

	$scope.getByMuscle = ()=>{
		mainDataFactory.getSampleMuscle()
		.then((obj)=>{
			$scope.movements = obj;

		});
	};

	$scope.getByEquipment = ()=>{
		mainDataFactory.getSampleEquipment()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};

	$scope.save= ()=>{
		if(user === undefined){
			toastr.warning("Please log in or sign up.");
			$location.url("/login");
		} else{
			toastr.info("You'll need a plan first. We'll take you where you can do that.");
			$location.url("/createPlan");
		}
	};


});