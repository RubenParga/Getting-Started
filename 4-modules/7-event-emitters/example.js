const EventEmitter = require('events');
const myEmitter = new EventEmitter();

setImmediate(()=>{
    myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fire');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fire');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fire');
});

// Streams are Event Emitters
// process.stdin, process.stdout
myEmitter.emit('TEST_EVENT');