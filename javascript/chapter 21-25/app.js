// // var myFood = [{ name: "kachori", price: 34 }, { name: "samosay", price: 25 }, { name: "pakoray", price: 20 }]

// // for (i = 0; i < myFood.length; i++) {
// //     myFood[i].name = myFood[i].name.slice(0, 1).toUpperCase() + myFood[i].name.slice(1).toLowerCase()
// // }

// // console.log(myFood)

// var myParagraph = "mera naam sufiyan hai, aur meray nic per bhi sufiyan hi likha hai"



// var kisKoReplaceKarnaHai = prompt("kisKoReplaceKarnaHai")  //sufiyan  7
// var kisSeyReplaceKarnaHai = prompt("kisSeyReplaceKarnaHai")

// console.log(myParagraph.indexOf(kisKoReplaceKarnaHai))


// // console.log(kisKoReplaceKarnaHai.length)


//  //initialize  //condition         increment/decrement

// for (i = 0; i < myParagraph.length; i++) {
//              // sufiyan === sufiyan 
//     // if (myParagraph.slice(i, i + kisKoReplaceKarnaHai.length) === kisKoReplaceKarnaHai) {
//         // console.log("mil gaya", i)
//         // console.log(myParagraph.slice(0, i) + kisSeyReplaceKarnaHai + myParagraph.slice(i + kisKoReplaceKarnaHai.length))
//     // }
// }



// var myNewParagraph = myParagraph.replace(/sufiyan/g, kisSeyReplaceKarnaHai)

// console.log(myNewParagraph)


// const globalNumber = 5;

// function add(num1, num2) {
//     const globalNumber = 75
//     const result = num1 + num2 + globalNumber
    
//     function multiply() {
//         const multiplyResult = result * globalNumber
//         console.log(multiplyResult)
//     }
//     multiply()
//     return result
// }

//            // result = 12
// console.log(add(3,4))

const login = (callBack) => {
    console.log("blah blah")
    if(login === true) {
        //id
        callBack("31243428349572")
    }
}

const dataFetch = (id) => {
    console.log("pee pooon " + id)
}


login(dataFetch)