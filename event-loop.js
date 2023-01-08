const crypto = require('crypto');
const fs = require('fs')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 1;
process.env.UV_THREADPOOL_SIZE = 2;
process.env.UV_THREADPOOL_SIZE = 3;
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Timer 1 finished'), 0)
setImmediate(() => console.log('Immediate 1 finished'))

fs.readFile('./txt/start.md', () => {
    console.log('I/O finished')
    console.log('-------')

    setTimeout(() => console.log('Timer 2 finished'), 0)
    setTimeout(() => console.log('Timer 3 finished'), 3000)
    setImmediate(() => console.log('Immediate finished'))

    process.nextTick(() => console.log('process.nextTick'))

    /**
     * Synchronous will block Tread/Entire Excutation
     * 
    */
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted')
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted')
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted')
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted')

    /**
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted')
    })
    */
})
