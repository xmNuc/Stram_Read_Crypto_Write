const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createCipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { ENCRYPTION_SALT } = require('./constant');

(async () => {
  const [, , inputFile, outputFile, pwd] = process.argv;
  const key = await scrypt(pwd, ENCRYPTION_SALT, 24);
  const algorithm = 'aes-192-cbc';

  await pipeline(
    createReadStream(inputFile),
    createCipher(algorithm, key),
    createWriteStream(outputFile)
  );
  console.log(
    `Encryprion file ${inputFile} is: Done! New name of encryptetd file is ${outputFile}.`
  );
})();
