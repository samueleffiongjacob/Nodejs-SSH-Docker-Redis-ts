function encrypt(data) {
    return 'encrypted data';
}

// function send(url, data) {
//     const encryptData = encrypt(data);
//     console.log(`sending ${encryptData} to ${url}`);
// }

// module.exports= {
//     send,
// }


exports.send = function send(url, data) {
    const encryptData = encrypt(data);
    console.log(`sending ${encryptData} to ${url}`);
}