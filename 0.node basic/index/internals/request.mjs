function encrypt(data) {
    return 'encrypted data';
}

export function send(url, data) {
    const encryptData = encrypt(data);
    console.log(`sending ${encryptData} to ${url}`);
}