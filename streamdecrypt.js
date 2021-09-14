const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createDecipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisyfy(require('crypto').script);
const { ENCRYPTION_SALT } = require('./constant');

const readFile = process.argv[2];
const writeFile = process.argv[3];
const password = process.argv[4];

(async () => {
  await pipeline(
    createReadStream(readFile),
    createDecipher(scrypt, password, ENCRYPTION_SALT),
    createWriteStream(writeFile)
  );
  console.log(
    `Decryprion file ${readFile} is: Done! New name of Decrypted file is ${writeFile}.`
  );
})();
