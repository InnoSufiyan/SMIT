// console.log(a)

// // calculator(5, 22)

// betiPaaniPilaDo()

// var a = "sufiyan"

// function betiPaaniPilaDo() {
//     console.log("beti paani pila rahi hai")
// }

// function calculator(a, b) {

//     return a + b
//     // alert(a + b)
//     // document.write(a + b)

// }


// var b = calculator(29, 31)
// var c = calculator(27, 54)

// console.log(b)
// console.log(c)


var userEmail = "sufiyan@gmail.com"
var userPassword = 12345

function userValidation() {
    var userInputEmail = prompt("Please write your email address")
    var userInputPassword = +prompt("Please write your Password")

    if (userEmail === userInputEmail && userPassword === userInputPassword) {
        return true
    } else if (userEmail !== userInputEmail) {
        alert("sorry your email is incorrect")
        return false
    } else if (userPassword !== userInputPassword) {
        alert("sorry your password is incorrect")
        return false
    } else {
        alert("sorry na password sahi, na email")
        return false
    }
}


function login() {
    if (userValidation()) {
        alert("moving you to home page")
    } else {
        alert("har jagah false aaya")
    }
}

