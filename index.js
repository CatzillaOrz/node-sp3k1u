// run `node index.js` in the terminal
const fs = require('fs')
const text = fs.readFileSync('./txt/input.txt', 'utf8')

console.log(text)

const outText = `# Avocado \n\n ## This is what we know about avocado: \n\n -  ${text} \n - time: ${Date.now()}`
fs.writeFileSync('./txt/output.md', outText);
