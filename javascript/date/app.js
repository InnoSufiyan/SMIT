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


const aulaad = ["aslam", "salman", "kamran", "farhan", "fareeha"]

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



const newAulaad = ["aslam", "salman", "kamran", "farhan", "fareeha"]

const newAulaad2 = newAulaad.map((item) => {

    return "alif bay pay"
})

console.log(newAulaad2)