// renaming the file and also store on different Location
// writing data into file
var fs = require('fs');
var oldPath = __dirname + '/Data.txt';
var newPath = __dirname + '/Data1.txt';

fs.rename(oldPath,newPath,function(err){
  if(err){
    console.error("rename error :- " + err.meassage);
  }else {
    console.log("Successfully rename the file");
  }
});
