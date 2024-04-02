import fs  from 'fs';

fs.readFile('./hello.txt',(err,data) => {
    if(err){
        console.log('errroooooo!',err);
    }
    console.log('Async data:',data.toString());
})

// reading file synchronously
const File = fs.readFileSync('./hello.txt');
console.log("sync data",File.toString())

// Append
fs.appendFile('./hello.txt',' "\n"This is so cool!',err => {
    if(err){
        console.log(err);
    }
})

// Write
// fs.writeFile('bye.txt','Goodbye! sad to see you go',err => {
//     if(err){
//         console.log(err);
//     }
// })        

// Delete
fs.unlink('./bye.txt', err =>{
    if (err){
        console.log(err)
    }
    console.log('insertion')
})