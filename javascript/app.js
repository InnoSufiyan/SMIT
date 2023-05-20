"use strict";


// var firstName = prompt("What is your first name??")
// var lastName = prompt("What is your last name??")

// var age = prompt("What is your age??")



// console.log("My name is " + firstName + " " + lastName + " and your current age is " + age + " and after 5 years you will be " + (Number(age) + 5))   //ES5

// template literals       ES6
// console.log(`My name is ${firstName} ${lastName} and your current age is ${age} and after 5 years you will be ${Number(age) + 5}`)

// data type

// number
// string
// boolean
// undefined
// null

// var student;

// console.log(student)
// console.log(student1)

// var age = 32;
// var ageFromUser = +prompt("Type your age")

// console.log(age)
// console.log(ageFromUser)
// console.log(typeof age)
// console.log(typeof ageFromUser)

// var doodhKiDukan = false

// if (doodhKiDukan) {
//     buy = "doodh le kar aajaoun";
//     console.log(buy)
// } else {
//     buy = "na le kar aaoun";
//     console.log(buy)
// }

// var money;
// console.log(money, "money consoled with no value")


// if (money) {
//     console.log("aao shopping k liye chalain")
// } else {
//     console.log("chup chaap ghar main bethey raho")
// }

// money = 1000;
// console.log(money, "after initializing value in money variable")

// var age = prompt("type your age")

// var isBlind = true
// var isHelmet = true
// var isLicense = true
// var parchi = false

//true           //true       //true        //true
// if ((age >= 18 && !isBlind && isHelmet && isLicense) || parchi) {
//     console.log("bike chalana allowed hai")
// } else {
//     console.log("aap ka kat jaeyga")
// }

//team A = 50, 20, 15, 3
// team B = 20, 50, 9, 3

// alert("blah blah")

// var isPetrol = true;
// var doodhWalaOpen = true;

// if(isPetrol && doodhWalaOpen) {
//     console.log("door waley doodh waley sey doodh le aao")
// } else if(isPetrol || doodhWalaOpen) {
//     console.log("qareeb wley sey le aao")
// } else {
//     console.log("khaali haath ghar aajao")
// }
// var a = 1;
// var b = 3;
// var c = 2;
// var d = 2;
// var e;
// var g;
// var f = 420;
// var h = 320;
// var x = 3;
// var y = 4;

// if ((x === y || a === b) && c === d) {
//     g = h;
// }
// else {
//     e = f;
//     console.log(e)
// }





// var day = prompt("Which day's menu , you want to know??")

// if (day == "monday") {
//     console.log("murgi ki karahi")
// } else if (day == "tuesday") {
//     console.log("sabzi")
// } else if (day == "wednesday") {
//     console.log("sabzi")
// } else if (day == "thursday") {
//     console.log("murgi")
// } else if (day == "friday") {
//     console.log("biryani")
// } else if (day == "saturday") {
//     console.log("daal chawal")
// } else {
//     console.log("holiday")
// }


// var yehMeraH1Hai = document.getElementsByTagName('h1')

// console.log(yehMeraH1Hai)



// =
// == equal comparison
// === equal in value and date type
// != not equal too
// !== not equal too and no equal data type
// >  greater than
// <  smaller than
// >=  greater than or equal too
// <=  smaller than or equal too


// var name;

// var name = "sufiyan"

// var name1;





// let price = "700"

// let price1;



// price = "300"

// const price2 = 5000;

// price2 = 10000;


// console.log(price2)

// var a = "kuch bhi"

// function meraFunction() {
//     var b = "mera functional scope ka variable"

// }


// if(true) {
//     var c = "mera c variable"
// }

// console.log(a)
// console.log(b)
// console.log(c)

// let a = "kuch bhi"

// function meraFunction() {
//     let b = "mera functional scope ka variable"
// }

// if (true) {
//     let c = "mera c variable"
// }

// for(let i = 0; i < ["dasd", "adad", "dada"].length; i++) {
//     console.log(i)
// }

// console.log(a)
// console.log(i)
// console.log(c)
// console.log(b)


console.log(this)

function meraFunction() {
    console.log(this)
}
meraFunction()

const a = () => {
    console.log(this)
}

a()

const b = function() {
    console.log(this)
}

b()

const obj = {
    name: "sufiyan",
    calcAge: ()=> {
        console.log(this)
    }

}

obj.calcAge()