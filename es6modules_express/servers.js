import http from 'http'

// const server = http.createServer(()=>{
//     console.log('l hear you. thanks for the request')
// })

// const server = http.createServer((request,response)=>{
//     console.log("headers",request.headers)
//     console.log("method:",request.method)
//     console.log("request",request.url)
//     response.setHeader('content-Type', 'text/html')
//     response.end("<h1>Hellooooooooo</h1>")
// })


// note request most come request before response
const server = http.createServer((request,response)=>{
    const user = {
        name: 'Samuel',
        hobby:'sooftware'
    };
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));

})
server.listen(3000);