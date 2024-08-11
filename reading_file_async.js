const fs = require("fs");

// fs.readFile("a.txt" , "utf-8" , function (err , data){
//   console.log(data);
// });

// fs.readFile("b.txt" , "utf-8" , function (err , data){
//   console.log(data);
// });

function callback(err , data){
  if(err){
    console.log("error occured!");
  }
  else{
    console.log(data);
  }
}

fs.readFile("a.txt" , "utf-8" , callback);
fs.readFile("b.txt" , "utf-8" , callback);