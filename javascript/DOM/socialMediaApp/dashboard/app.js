const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))

console.log(isLoggedInUser, "==>>isLoggedInUser")


if (!isLoggedInUser) {
    window.location.href = "../index.html";
}

const emailAddress = document.getElementById("emailAddress")
const name = document.getElementById("name")
const mobNum = document.getElementById("mobNum")
const gender = document.getElementById("gender")

emailAddress.innerText = isLoggedInUser.email
name.innerText = isLoggedInUser.firstName + " " + isLoggedInUser.surName
mobNum.innerText = isLoggedInUser.mobileNum
gender.innerText = isLoggedInUser.gender

function logoutHandler() {
    localStorage.removeItem('isLoggedInUser')
    window.location.href = "../index.html";
}
