// const promiseOne = new Promise(function (resolve , reject){
//   //Do async task
//   //DB calls, cryptography, network
//   setTimeout(function(){
//     console.log("async task is completed");
//     resolve();
//   },1000)
// })

// promiseOne.then(function(){
//   console.log("promise consumed");
// })


// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("async task 2 is completed");
//     resolve();
//   },1000)
// }).then(function(){
//   console.log("async task 2 is resolved");
// })


// const promiseThree = new Promise(function(resolve , reject){
//   setTimeout(function(){
//     resolve({
//       username : "lomash",
//       age : 18,
//       gender : "male"
//     })
//   },1000)
// })
// let user;
// promiseThree.then(function(user){
//   console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = false;
//     if(!error){
//       resolve({
//         username : "lomash",
//         age : 18,
//         gender : "male"
//       })
//     }
//     else{
//       reject("ERROR : Something Went Wrong");
//     }
//   },1000)
// })

// let user;

// promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("promise is either resolved or rejected finally");
// })


// const promiseFive = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     const error = false;
//     if(!error){
//       resolve({
//         username : "javascript",
//         age : 18,
//         gender : "female"
//       })
//     }
//     else{
//       reject("ERROR : Something went wrong");
//     }
//   },1000)
// })

// async function consumePromiseFive(){
//   try{
//     const response = await promiseFive
//     console.log(response);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// consumePromiseFive();



// async function getallusers(){
//  try {
//   const resource = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await resource.json()
//   console.log(data);
//  }
//  catch(error){
//   console.log("ERROR : " + error);
//  }
// }

// getallusers();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => {
//   return data.json()
// })
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// })

// const fs = require("fs");
// const util = require("util");

// const asyncFileRead = util.promisify(fs.readFile);

// async function fileReading(){
//   try{
//     const data = await asyncFileRead("a.txt","utf-8");
//     console.log(data);
//   }
//   catch(error){
//     console.log("error in reading",error);
//   }
// }

// fileReading();



function timeout(time){
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

timeout(5000)
.then(() => {
  console.log("run after 5 seconds");
})