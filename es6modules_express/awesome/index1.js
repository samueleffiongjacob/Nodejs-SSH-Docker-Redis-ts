import fs from 'fs';

fs.readFile('./hello.txt',(err,data) => {
    console.time('Async');
    if(err){
        console.log('errroooooo!',err);
    }
    console.log('Async data:',data.toString());
    console.timeEnd('Async');
})