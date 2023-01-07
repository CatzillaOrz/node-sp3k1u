// run `node index.js` in the terminal
const fs = require('fs')
const text = fs.readFileSync('./txt/input.txt', 'utf-8')

const outText = `# Avocado \n\n ## This is what we know about avocado: \n\n -  ${text} \n - time: ${Date.now()}`
fs.writeFileSync('./txt/output.md', outText);

// run as Asynchronous
fs.readFile('./txt/start.md', 'utf-8', (err, data) => {
    const str = data.toString().replace(/\n/g,"")
    fs.readFile(`./txt/${str}`, 'utf-8', (err, result) => {
        fs.writeFile('./txt/final.md', `${data} \n ${result}`,  'utf-8', err => {
            console.log(err)
        })
    })
})

