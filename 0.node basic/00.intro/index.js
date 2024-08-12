const mission = 'learn';
//const mission = process.argv[2]; // this allows us to pass in an argument from the command line e.g index.js learn

// conditional

if (mission === 'learn') {
    console.log(`Time to write some code to ${mission}`);
} else {
    console.log(`ls ${mission} really more fun?`)
} 


//  EVENT EMITTER
const events = require('events');
const celebrity = new events.EventEmitter();

// subscribe to celebrity for observer1
celebrity.on('my_event', (result) => {
  if (result === 'win'){
    console.log('data received successfully.');
  }
});

// subscribe to celebrity for observer2
celebrity.on('exit', (result) => {
    if(result == result){
        console.log('data received successfully. but u are slow');
    }
});

celebrity.on('events', () => {
    console.log ('u are are dog ')
})

celebrity.emit('my_event', 'win');
celebrity.emit('exit', 'lost');
celebrity.emit('my_event');