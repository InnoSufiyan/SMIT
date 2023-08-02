const fs = require('fs')

// synchronous file read

// const meriFileKaData = fs.readFileSync('./text/input.txt', 'utf-8')

// console.log(meriFileKaData)

// asynchronous file read

fs.readFile('./text/input.txt', 'utf-8', (err, data)=> {
    if(err) {
        console.log("phat gaya code")
    } else {
        console.log("chal gaya code")
    }
})

console.log("checking asynchronous operation")

// synchronous file write

// const meraText = `text changed again n again`

// fs.writeFileSync('./text/input.txt', meraText)

// console.log("file written successfully")