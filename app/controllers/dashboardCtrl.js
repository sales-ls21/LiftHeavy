"use strict";

app.controller("dashboardCtrl", function($window, $scope, userFactory, authFactory){
	
	let displayExercises = (function(){
		let user = authFactory.getUser();
		$scope.exercises = userFactory.getUserExercises(user);
		console.log($scope.exercises);
		if($scope.exercises === null || undefined){
			$window.alert("You need to save some exercises, son!");
		} 
	})();


	


	

});