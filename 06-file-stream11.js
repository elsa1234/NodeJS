// remove directory
var fs = require('fs');
var path = __dirname + '/ExpressJs';

fs.rmdir(path,function(error){
  if(error)
      console.log('rmdir error :- ' + error.message);
  else {
    console.log('remove directory success');
  }
});
