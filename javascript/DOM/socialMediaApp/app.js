const loginEmail = document.querySelector('#email')
const loginPassword = document.querySelector('#inputPassword')
const firstName = document.querySelector('#recipient-name')
const surName = document.querySelector('#recipient-surname')
const mobNum = document.querySelector('#recipient-mobile')
const password = document.querySelector('#recipient-pass')
const email = document.querySelector('#recipient-email')


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
    console.log(loginEmail.value)
    console.log(loginPassword.value)

    if(!loginEmail.value || !loginPassword.value) return alert("Please write email and password to continue")

    const userFound = users.filter((user) => {
        console.log("user email in userFound filter", user.email)
        return user.email === loginEmail.value
    })

    console.log(userFound, "==>>user found in login")

    if(!userFound.length) return alert("This user is not registered, kindly create an account first")


    console.log(loginPassword.value, "===>>> login password of input")
    console.log(userFound.password, "user password from local storage")

    if(userFound[0].password == loginPassword.value) {
        alert("user is logging in")
        
        localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]))


        window.location.href="./dashboard/index.html";


    } else {
        alert("password is incorrect")
    }
}



function signupHandler() {

    console.log("user email in our input", email.value)

    const userFound = users.filter((user) => {
        console.log("user email in userFound filter", user.email)
        return user.email === email.value
    })

    if (userFound.length) return alert("Email address already in use, please use another email address")

    // mobile number validation


    console.log("user mil gaya ==>>>", userFound)

    const modal = document.getElementById('exampleModal')

    console.log(modal)

    modal.classList.toggle('show')



    if (firstName.value !== "" && surName.value !== "" && mobNum.value !== "" && password.value !== "" && date !== undefined && month !== undefined && year !== undefined && gender !== undefined) {
        if (password.value.length < 8) return alert("password should contain 8 characters")

        const userObj = {
            firstName: firstName.value,
            surName: surName.value,
            mobileNum: mobNum.value,
            password: password.value,
            date: new Date(`${year}-${month}-${date}`),
            email: email.value,
            // gender: gender
            gender
        }



        users.push(userObj)

        localStorage.setItem('users', JSON.stringify(users))

        alert("User signup successfully")

        firstName.value = ""
        surName.value = ""
        mobNum.value = ""
        password.value = ""
        email.value = ""





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