"use strict";

app.factory("authFactory", function() {
	let provider = new firebase.auth.GoogleAuthProvider();
	let currentUser;

	let createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = function(userObj){
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
	};	

	let googleSignIn = ()=>{
		return firebase.auth().signInWithPopup(provider)
		.then(function(result) {
			currentUser = result.user;	
		});
	};
  
	let logoutUser = function(){
		firebase.auth().signOut();
	};

	let isAuthenticated = function(){
		return new Promise((resolve, reject) =>{
			firebase.auth().onAuthStateChanged((user)=>{
				if (user){
					console.log("who is it?", user.uid);
					currentUser = user.uid;
					resolve(true);
				} else{
					console.log("not logged in");
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};

	return {googleSignIn, createUser, logoutUser, loginUser, isAuthenticated, getUser};
});