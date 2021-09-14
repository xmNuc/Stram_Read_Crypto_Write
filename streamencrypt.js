const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createCipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisyfy(require('crypto').script);
const { ENCRYPTION_SALT } = require('./constant');

const [, , inputFile, outputFile, pwd] = process.argv;

(async () => {
  await pipeline(
    createReadStream(inputFile),
    createCipher(scrypt, pwd, ENCRYPTION_SALT),
    createWriteStream(outputFile)
  );
  console.log(
    `Encryprion file ${readFile} is: Done! New name of encryptet file is ${writeFile}.`
  );
})();
