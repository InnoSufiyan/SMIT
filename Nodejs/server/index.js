import fs from 'fs'
import http from 'http'
import url from 'url'

const PORT = 8000

fs.readFile('./myTexts/input.txt', 'utf-8', (err, data)=> {
    console.log("file read successfully", data)

    const text = "File is updating now"

    fs.writeFile('./myTexts/input.txt', text, (err, data)=> {
        if(!err) {
            fs.readFile('./myTexts/input.txt', 'utf-8', (err, data)=> {
                console.log("read updated data", data)
            })
        }
    })
})

console.log("Welcome")

const server = http.createServer((req, res)=> {
    console.log(req.url, "==>>request url is")
    if(req.url === "/dahibaray") {
        res.end("Hello to the dahi baray")

    } else if (req.url === "/cholay") {
        res.end("Hello to the cholay")
    } else {
        res.writeHead(404)
        res.end(`Sorry bhaiyya ${req.url.slice(1)} available nai hai`)
    }

})

server.listen(PORT, '127.0.0.1', () => {
    console.log("Jani main kaan laga k sun raha hun, server chal gaya")
})


// const student2 = {
//     name: "sufiyan",
//     class: 'B9',
//     subjct: "computer"
// }

// const {name : nameOfStudent, class: classOfStudent, subjct} = student2