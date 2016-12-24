"use strict";

app.controller("getDetailsCtrl", function($window, $scope, $routeParams, $location, userFactory){
	
	let planObj = [];

	userFactory.getByPlanName($routeParams.name)
	.then((obj)=>{
		planObj = obj;
		$scope.$apply();
	});

	$scope.printMe = ()=>{
		let printarea = $(".printDiv");
		$window.print(printarea);
		return false;
	};
});