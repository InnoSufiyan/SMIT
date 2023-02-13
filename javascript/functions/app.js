//variables
// var , let, const

// var name = "sufiyan"
// let name = "sufiyan"
// const name = "sufiyan"

// var //anytime declare, anytime initialize, value can be changed whenever you need

// var name;
//var name = "sufiyan"



// let //only once time declare, can be initialized anytime without let keyword

// let name;
// name = "sufiyan"


// const //declaration and initialization can only be done once and at the same moment

// const name = "sufiyan"

// legal and illegal variables
// variable name can only use $ and _ signs in it at any place, and number can be added in center or in the last

// if and else and else if statments
if ("condition") {
    //what to work on
} else if ("condition") {
    //what to work on
} else {
    //what to work on
}

// string  "" ''
// number  without inverted commas likhengey for e.g 2 , 3
// boolean without inverted commas likhengey for true false

// var isBlind = false

// alert(isBlind)

//false
// if (!isBlind) {
//     alert(!isBlind)
//     // bike chalaaney do
// } else {
//     //to is ko bike chalaaney na do
// }

// helper functions
//alert -->> alert("") =>> pop up
//document write -->> document.write("") ==>> document per likhney main help kareyga
// console -->> console.log("") ==>> writes in console in browser

// conditional operators
// && ==>> both conditions should be correct / true
// || ==>> only one condition should be correct / true and it will go for implementation


// true && true && true && false
// false || true || true || false
// ! ==>> not operator ==>> makes anything opposite ==>> works with boolean

// var age = 31;
// //true
// if (age !== 29) {
//     console.log("my age is not 31")
// }


function betaPaniLaaKarDo(liquid) {
    console.log(`yahaan sey utho aur ${liquid} waley cooler tak jao`)
    console.log("pyar o muhabbat sey glass ko pakro aur uthao")
    console.log("cooler ki tooti kholo aur glass ko neechey rakho")
    console.log(`${liquid} bharney ka wait karo, jesay hi end per puhnchey tooti band kardo`)
    console.log(`sambhal kar ${liquid} ka glass laao aur ${liquid} de do`)

}

betaPaniLaaKarDo("pani")
betaPaniLaaKarDo("apple juice")
betaPaniLaaKarDo("coffee")
betaPaniLaaKarDo("mosambi juice")
betaPaniLaaKarDo("tea")


// function juiceBanao(fruit1, fruit2) {

//     console.log(fruit1, "yeh hai mera fruit 1")
//     console.log(fruit2, "yeh hai mera fruit 2")


//     if (fruit1 && fruit2) {
//         console.log(`Making mix juice of ${fruit1} and ${fruit2}`)
//     } else if (fruit1) {
//         console.log(`Making fruit juice of ${fruit1}`)
//     } else {
//         console.log("Please suggest some fruits to me")
//     }
// }

// juiceBanao(2, 5)


// create a function, it takes 2 values
// numbers values 30 65
// add these values

function additionForTwoNumber(val1, val2, val3) {
    console.log(`menay yahaan in 2 numbers ko add kiya ${val1} aur ${val2} , result yeh aaya ${val1 + val2}`)
    console.log("menay yahaan in 2 numbers ko add kiya " + val1 + " aur " + val2 + ", result yeh aaya" + (val1 + val2))
}

additionForTwoNumber(15, 5)


var yourname = prompt("Please tell me your name")

function greetUser(dasdad) {
    alert(dasdad)
}

greetUser(yourname)