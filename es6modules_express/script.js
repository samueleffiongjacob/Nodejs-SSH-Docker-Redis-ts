// const script2 = require('./script2')
import { largeNumber } from './script2.js'

const a = largeNumber;// script2.largeNumber;
const b = 8
const c = 4
const d = 5

console.log('wait for the result in 9 second...')

setTimeout(() => {
    console.log(a+b)
}, 1000)