// callback - hell solution
var fs = require('fs');
var file = 'info.txt';

function ReadingFile(err, data){
  if(err) throw err;
  console.log(data);
}

function status(err, stat){
  if(err){
    throw err;
  }
  if(stat.isFile()){
    fs.readFile(file,'utf8',ReadingFile);
  }
}

function fileExists(exists){
  if(exists){
    fs.stat(file,status);
  }
}

fs.exists(file,fileExists);
