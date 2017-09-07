var net = require('net');

var client = net.connect({
    port : 3000,
    host : 'localhost'}, function(err){
        console.log('connection established ....  !!!!');
});
