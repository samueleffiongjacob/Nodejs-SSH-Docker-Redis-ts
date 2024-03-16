import fs  from 'fs';

fs.readFile('./hello.txt',(err,data) => {
    if(err){
        console.log('errroooooo!',err);
    }
    console.log('data:',data.toString());
})

// reading file synchronously
const File = fs.readFileSync('./hello.txt');
console.log(File.toString())