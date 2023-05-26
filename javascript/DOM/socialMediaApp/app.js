const email = document.querySelector('#email')
const loginPassword = document.querySelector('#inputPassword')
const firstName = document.querySelector('#recipient-name')
const surName = document.querySelector('#recipient-surname')
const mobNum = document.querySelector('#recipient-mobile')
const password = document.querySelector('#recipient-pass')


const loginBtn = document.querySelector('#login')
const signupBtn = document.querySelector('#signup')

let date;
let month;
let year;
let gender;

const users = JSON.parse(localStorage.getItem('users')) || []

console.log(users)


loginBtn.addEventListener('click', loginHandler)
signupBtn.addEventListener('click', signupHandler)

function loginHandler() {
    console.log(email.value)
    console.log(loginPassword.value)
}



function signupHandler() {
    if (firstName.value !== "" && surName.value !== "" && mobNum.value !== "" && password.value !== "" && date !== undefined && month !== undefined && year !== undefined && gender !== undefined) {
        if (password.value.length < 8) return alert("password should contain 8 characters")

        const userObj = {
            firstName: firstName.value,
            surName: surName.value,
            mobileNum: mobNum.value,
            password: password.value,
            date: new Date(`${year}-${month}-${date}`),
            // gender: gender
            gender
        }

        

        users.push(userObj)

        localStorage.setItem('users', JSON.stringify(users))

        alert("User signup successfully")

    } else {
        alert("insaan ban k saari fields fill up karlo")
    }
}

function getDateHandler(d) {
    console.log(d, "dateHandler working")
    date = d
}
function getMonthHandler(m) {
    console.log(m, "monthHandler working")
    month = m
}
function getYearHandler(y) {
    console.log(y, "yearHandler working")
    year = y
}
function getGenderHandler(g) {
    console.log(g, "genderHandler working")
    gender = g
}