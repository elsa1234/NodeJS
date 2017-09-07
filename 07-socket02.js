var net = require('net');

var server = net.createServer(function(socket){
    socket.end('Socket running Successfully ..... !!!!!');
});

server.on('error',function(error){
  if(error.code === "EADDRINUSE"){      // E-error ADDR-Address in use
    console.error('port is already in use .... !!!!');
  }
});
server.listen(3000,function(){
    console.log("server started .... !!!!");
});
