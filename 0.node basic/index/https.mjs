import internals from './internals/index.mjs';

const { rep, res } = internals;

function request(url, data) {
    rep(url, data);  // Call rep as a function
    return res();    // Call res as a function
}

const view = request('https://google.com', 'hello');
console.log(view);
