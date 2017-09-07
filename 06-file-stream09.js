// making directory
var fs = require('fs');
var path = __dirname + '/ExpressJs';

fs.mkdir(path,function(err){
  if(err)
      console.error('mkdir error:- ' + err.message);
  else {
      console.log('directory making success');
  }
});
