"use strict";

app.controller("getDetailsCtrl", function($window, $scope, $routeParams, $location, userFactory){
	
	$scope.planObj = [];
	$scope.toDelete = "";
	let updatedObj = {
		planId: ""
	};

	userFactory.getByPlanName($routeParams.name)
	.then((obj)=>{
		$scope.planObj = obj;
		console.log($scope.planObj);
		$scope.$apply();
	});

	$scope.printMe = ()=>{
		let printarea = $(".printDiv");
		$window.print(printarea);
		return false;
	};

	$scope.delete= ()=>{
		console.log($scope.toDelete);
		userFactory.deleteExercise($scope.toDelete, updatedObj)
		.then((obj)=>{
		toastr.success("Too much for you, huh? Ok, it's gone.");		
		this.parent.remove();
		});


	};
});