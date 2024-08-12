// node module

//const http = require('http');
const https = require('https');

// const { request } = require('https') // ecma script but requst most always have the end function

const { get } = require('https')

// const req = http.request('http://www.google.com', (res) => {
//     res.on('data', (chuck) =>{
//         console.log(`Data chuck : ${chuck}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

//req.end()
// const req = https.request('https://www.google.com', (res) => {
//     res.on('data', (chuck) =>{
//         console.log(`Data chuck : ${chuck}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

// req.end() // this allow requst to be sent

// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chuck) =>{
//         console.log(`Data chuck : ${chuck}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

// req.end() // this allow requst to be sent 


get('https://www.google.com', (res) => {
    res.on('data', (chuck) =>{
        console.log(`Data chuck : ${chuck}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});


