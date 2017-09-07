var events = require('events');
var emitter = new events.EventEmitter();

function handler(){
  console.log('in myEvent handler');
}

emitter.on('myEvent', handler);
emitter.emit('myEvent');
emitter.emit('myEvent');
emitter.removeListener('myEvent',handler);

// after removinf event emit method will not envoke event.
emitter.emit('myEvent');
emitter.emit('myEvent');
