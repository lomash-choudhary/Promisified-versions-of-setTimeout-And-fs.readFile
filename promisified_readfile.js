const fs = require("fs");
const util = require("util");

const asyncFileRead = util.promisify(fs.readFile);

async function fileReading(){
  try{
    const data = await asyncFileRead("a.txt","utf-8");
    console.log(data);
  }
  catch(error){
    console.log("error in reading",error);
  }
}

fileReading();