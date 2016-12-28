"use strict";

app.controller("browseCtrl", function($location, $scope, userFactory, mainDataFactory, authFactory){
	$(".equipTag").click(function(e){
		$(".equipDiv").show();
	});

	$(".nameTag").click(function(e){
		$(".nameDiv").show();
	});

	$(".muscleTag").click(function(e){
		$(".muscleDiv").show();
	});

	let user = authFactory.getUser();

	$scope.searchTerm = "";
	$scope.exercises = [];
	$scope.muscle = "";
	$scope.equipment= "";
	

	$scope.findByEquipment = ()=>{
		$(".equipDiv").hide();
		mainDataFactory.findByEquipment($scope.equipment)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			$scope.$apply();
		});
	};

	$scope.findByName = ()=>{
		$(".nameDiv").hide();
		mainDataFactory.findByName($scope.searchTerm)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			$scope.$apply();
		});
	};
	$scope.getMuscleExercises = ()=>{
		$(".muscleDiv").hide();
		mainDataFactory.getMuscleExercises($scope.muscle)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			console.log($scope.exercises);
			$scope.$apply();
		});	
	};

	$scope.save = ()=>{
		if (user === undefined){
			$location.url("/login");
			toastr.warning("Hard to save your stuff if you're not logged in, son.");
		} else {
			$location.url("/createPlan");
		}
	};
});