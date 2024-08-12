// export const REQUEST_TIMEOUT = 500;

function decrypt(data) {
    return 'decryted data';
}

// function read() {
//     return decrypt('data');
// }

// module.exports ={
//     read,
// }

exports.read = function read() {
    return decrypt('data');
}