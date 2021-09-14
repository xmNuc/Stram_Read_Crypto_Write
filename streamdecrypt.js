const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createDecipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { ENCRYPTION_SALT } = require('./constant');

(async () => {
  const [, , inputFile, outputFile, pwd] = process.argv;
  const key = await scrypt(pwd, ENCRYPTION_SALT, 24);
  const algorithm = 'aes-192-cbc';

  await pipeline(
    createReadStream(inputFile),
    createDecipher(algorithm, key),
    createWriteStream(outputFile)
  );
  console.log(
    `Decryprion file ${inputFile} is: Done! New name of Decryptetd file is ${outputFile}.`
  );
})();
