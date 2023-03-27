// var text = document.querySelector('.dadas').textContent

// var inputText = document.querySelector('input')

// var button = document.querySelector('button')

// button.addEventListener('click', ()=> {
//     console.log(inputText.value, "==>>inputText")
// })

// var meraInput = document.querySelector('.meraInput')
// var dot = document.querySelector('.dot')
// var one = document.querySelector('.one')
// var two = document.querySelector('.two')

// dot.addEventListener('click', () => {
//     console.log(meraInput)
//     console.log(meraInput.textContent.indexOf('.'))
//     if (meraInput.textContent.indexOf('.') == -1) {
//         meraInput.textContent = meraInput.textContent + "."
//     }
// })
// one.addEventListener('click', () => {
//     console.log(meraInput)
//     meraInput.textContent = meraInput.textContent + "1"
// })
// two.addEventListener('click', () => {
//     console.log(meraInput)
//     meraInput.textContent = meraInput.textContent + "2"
// })

// //expression function

// function myFoo() {

// }

// //arrow function

// const myFoo2 = () => {

// }


// const myFoo3 = function() {

// }

// const meriIncomingCall = ( cbFunction, stringValue ) => {

//     console.log(cbFunction)

//     //koi bhi kaam horaha tha.. jab yeh hojaey to phir.. dusra function call ho
//     let callKisKiSideSeyAai;
//     if("aamir") {
//         callKisKiSideSeyAai = "aamir"
//     } else if ("zakir") {
//         callKisKiSideSeyAai = "zakir"
//     } else if("rayyan") {
//         callKisKiSideSeyAai = "rayyan"

//     }

//     cbFunction(callKisKiSideSeyAai)            //meriOutcomingCall

// }

// const meriOutcomingCall = (callIsKiSideSeyAaiThi) => {
//     console.log(callIsKiSideSeyAaiThi)
// }

// meriIncomingCall(meriOutcomingCall, "123")


// const aulaad = ["aslam", "salman", "kamran", "farhan", "fareeha"]

// const aulaad2 = []

// for(i=0; i < aulaad.length; i++) {
//     aulaad2.push(aulaad[i] + " abdul shakoor")
// }

// const aulaad2 = aulaad.map((aulaadd)=> {
//     console.log( `${aulaadd} abdul shakoor`)
// })

// console.log(aulaad2)

// function login(cb, email, password) {
//     if(email, password) {
//         //second
//         cb("sgfgt34534545453dfgdftg")

//     }


// }
// function getDataOfUser(id) {
//     console.log("data le kar aao is id ka " + id)
// }

// login(getDataOfUser, "inno@mail.com", "12345678")



// const newAulaad = ["aslam", "salman", "kamran", "farhan", "fareeha"]

// const newAulaad2 = newAulaad.map((item) => {

//     return "alif bay pay"
// })

// console.log(newAulaad2)


// const first = (name) => {
//     if(name === "sufiyan") {
//         alert("aajao tumhara hi to intezar tha")
//     }
// }
// const second = (cb) => {
//     // dfasds;lggfgfdjg
//     const name = "sufiyan"
//     cb(name)
// }

// second(first)

// var bakeryItems = ["cold drinks", "bread", "makkhan", "jam", "eggs", "paapay"]

// let selectedItems = []

// for(i = 0; i < bakeryItems.length; i++) {
//     if(bakeryItems[i] === "paapay") {
//         selectedItems.push(bakeryItems[i])
//     }
//     console.log(bakeryItems[i])
//     console.log(i)
// }


// var kuchBhi = bakeryItems.map((item, indx)=> {
//     return item
// })

// console.log(kuchBhi, "==>>kuchBhi")

const aulaad = ["farhan", "kamran", "aslam", "salman"]

// const aulaadWithBaapKaNaam = []

// for(i = 0; i < aulaad.length; i++) {
//     aulaadWithBaapKaNaam.push(aulaad[i] + " singhaar")
// }

// const aulaadWithBaapKaNaam = aulaad.map((itm, ndx)=> {
//     return itm === "salman" //false //false //false //true

// })
// const aulaadSelected = aulaad.filter((itm, ndx)=> {
//     return itm == "aslam" || itm == "kamran"
// })

// console.log(aulaadWithBaapKaNaam)
// console.log(aulaadSelected)

const numbers = [2,4,8,6,12,54,15,4,8]

const numbersMultiplied = numbers.map((val)=> {
    return val * 3
})

const forEachValue = numbers.forEach((val)=> {
    console.log(val)
})

const findValue = numbers.find((val)=> {
    return val >= 4
})

const numbersSelected = numbers.filter((val)=> val >= 4 && val <= 12).map((val)=> val * 4)

// console.log(numbersMultiplied)
// console.log(numbersSelected)
console.log(findValue)
