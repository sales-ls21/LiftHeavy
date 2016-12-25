"use strict";

app.factory("userFactory", function($http, FBInfo){
	let planId;

	let saveUserPlan = (userObj)=>{
		return new Promise ((resolve, reject)=>{
			$http.post(`${FBInfo.databaseURL}/plans.json`, angular.toJson(userObj))
			.then((obj)=>{
				resolve(obj.data);
			});	
		});
	};

	let saveUserExercises = (id, userObj)=>{
		console.log(id, userObj);
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="exercise"&equalTo="${id}"`)
			.then((obj)=>{
				console.log(obj.data);
				let objData = Object.keys(obj.data);
				let move = objData[0];
				$http.patch(`${FBInfo.databaseURL}/movements/${move}.json`, angular.toJson(userObj))
				.then((obj)=>{
					resolve(obj);	
				});
			});
  		});	
	};

	let getUserPlans = (name)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/plans.json?orderBy="user"&equalTo="${name}"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let getByPlanName = (name)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="planId"&equalTo=${name}`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let deleteExercise = (id, updatedObj)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="exercise"&equalTo="${id}"`)
			.then((obj)=>{
				console.log(obj);
				// $http.patch(`${FBInfo.databaseURL}/movements/${}.json`, angular.toJson(updatedObj))
				// .then((obj)=>{
				// 	resolve(obj);
				// });
			});
		});
	};

	return{deleteExercise, getByPlanName, saveUserPlan, saveUserExercises, getUserPlans};
});