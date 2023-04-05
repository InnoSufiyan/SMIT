var email = document.getElementById('email')
var pass = document.getElementById('pass')

console.log(email, "=>>email")

console.log(pass, "=>>pass")



function validateEmail() {
    const falaana = "dhimkana"
    if(email.value === "" || !email.value.includes('.com') || !email.value.includes('@')) {
        console.log("Kaddu, email to likh")
    }
}