import {send} from './request.mjs';
import { read } from './response.mjs'



function request(url, data) {
    send(url, data); 
    return read();
}

const res = request('https://google.com', 'hello')
console.log(res)

