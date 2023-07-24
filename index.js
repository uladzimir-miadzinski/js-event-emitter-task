// EventEmitter
class EventEmitter {
  // your code goes here...
}

const cb1 = () => console.log('cb1');
const cb2 = () => console.log('cb2');
const cb3 = () => console.log('cb3');

const emitter = new EventEmitter();

emitter
  .on('click', cb1)
  .on('click', cb2)
  .emit('click')
  .on('keyup', cb3)
  .off('click', cb2)
  .emit('click')

// console:
// cb1
// cb2
// cb1