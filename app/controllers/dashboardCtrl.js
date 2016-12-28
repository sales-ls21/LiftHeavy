"use strict";

app.controller("dashboardCtrl", function($location, $scope, userFactory, authFactory){
let user= authFactory.getUser();

$scope.loadedStats = [];
$scope.plan = [];
$scope.planExercises = [];
$scope.updated = {
	completed: true,
	weight: "",
	time: "",
	reps: "",
	notes: "",
	dateCompleted: "" 
};

$scope.getPlanExercises = ()=>{
	console.log($scope.plan.planId);
	// let searchParam = $scope.plan.planId;
	// userFactory.getByPlanName(searchParam)
	// .then((obj)=>{
	// 	console.log(obj);
	// 	$scope.planExercises = obj;
	// 	$scope.$apply();
	// });
};


$scope.getPlan = ()=>{
	userFactory.getUserPlans(user)
	.then((obj)=>{
		let date = new Date();
		let today = date.getDay();
		switch (today) {
		    case 0:
		        today = "sunday";
		        break;
		    case 1:
		        today = "monday";
		        break;
		    case 2:
		        today = "tuesday";
		        break;
		    case 3:
		        today = "wednesday";
		        break;
		    case 4:
		        today = "thursday";
		        break;
		    case 5:
		        today = "friday";
		        break;
		    case 6:
		        today = "saturday";
		}
		let array = Object.values(obj);
		for (var i = 0; i < array.length; i++){
			if(array[i].day == today){
				$scope.plan = array[i];
			} 
		}
		$scope.$apply();
		console.log($scope.plan.planId);
	});
	$scope.getPlanExercises();
};





$scope.getLoadedStats = ()=>{
	userFactory.getStats(user)
	.then((obj)=>{
		console.log(obj);
		$scope.loadedStats = obj;
	});
};

$scope.getPlan();
// $scope.getLoadedStats();

$scope.addStats = ()=>{
	userFactory.updateStats($scope.plan.planId, $scope.updated)
	.then((obj)=>{
		toastr.success("Congrats. Tomorrow's a new day.");
		$location.url("/dashboard");
	});
};
	
});