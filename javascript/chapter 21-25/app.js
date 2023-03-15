// var myFood = [{ name: "kachori", price: 34 }, { name: "samosay", price: 25 }, { name: "pakoray", price: 20 }]

// for (i = 0; i < myFood.length; i++) {
//     myFood[i].name = myFood[i].name.slice(0, 1).toUpperCase() + myFood[i].name.slice(1).toLowerCase()
// }

// console.log(myFood)

var myParagraph = "mera naam sufiyan hai"



var kisKoReplaceKarnaHai = prompt("kisKoReplaceKarnaHai")  //sufiyan  7
var kisSeyReplaceKarnaHai = prompt("kisSeyReplaceKarnaHai")

console.log(myParagraph.indexOf(kisKoReplaceKarnaHai))


console.log(kisKoReplaceKarnaHai.length)


 //initialize  //condition         increment/decrement

for (i = 0; i < myParagraph.length; i++) {
             // sufiyan === sufiyan 
    if (myParagraph.slice(i, i + kisKoReplaceKarnaHai.length) === kisKoReplaceKarnaHai) {
        // console.log("mil gaya", i)
        // console.log(myParagraph.slice(0, i) + kisSeyReplaceKarnaHai + myParagraph.slice(i + kisKoReplaceKarnaHai.length))
    }
}

