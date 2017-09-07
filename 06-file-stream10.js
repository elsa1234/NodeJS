// if we want to know all the names of file in current directory
var fs = require('fs');

var path = __dirname;

fs.readdir(path,function(error, files){
  files.forEach(function(file){
    console.log(file);
  });
});
