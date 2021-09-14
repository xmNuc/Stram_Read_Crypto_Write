Version without iv, less safe, but it works.
It uses stream so thats mean works for big files.
You will gain 'DeprecationWarning' there is never version: crypto.createCipheriv, whitch of corse you should use.

How it works:
streamencrypt.js using stream to encrypt input file.
Saving to output file.

Use:
node streamencrypt.js inputfile outputfile password
(node streamencrypt.js 1.png 2.png pass)

---

streamdecrypt.js using stream for decrypt input file.
Saving to output file.

Use:
node streamdecrypt.js inputfile outputfile password
(node streamdecrypt.js 2.png 3.png pass)

constant.js just holding salt.

Jakub D
