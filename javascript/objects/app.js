
// const userDetailFromDataBase = {
//     firstName: "Inno",
//     lastName: "Sufiyan",
//     mobileNumber: "03422318760",
//     password: 12345678,
//     dateOfBirth: 04,
//     monthOfBirth: 02,
//     yearOfBirth: 1991,
//     gender: "male",
//     calcAge: function () {

//         return 2023 - this.yearOfBirth //1991  //32
//     },
//     forLearning: function () {
//         return this
//     },
//     myCompleteName: function () {
//         return this.firstName + this.lastName
//     }
// }

// userDetailFromDataBase.profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zjza79x9UE0J92hTTEH8u_RFjZ7wE7NraAbt4ICD&s"


// console.log(userDetailFromDataBase.calcAge())
// console.log(userDetailFromDataBase.forLearning())
// console.log(userDetailFromDataBase.myCompleteName())




// const userKaMobileNumber = prompt("Haan bhaee mobile number likh")
// const userKaPassword = prompt("Haan bhaee Password likh")

// const userDetails = {
//     mobileNumber: userKaMobileNumber,
//     password: userKaPassword
// }

// console.log(userDetails)

// if (userDetailFromDataBase.mobileNumber == userDetails.mobileNumber) {
//     if (userDetailFromDataBase.password == userDetails.password) {
//         alert("Mubarak you are going to login")
//     } else {
//         alert("Sorry in correct password")
//     }
// } else {
//     alert("No user found")
// }




// var x = "7";

// // x = +x + 5

// console.log(x);


// x += 10

// x -= 3         // x = x - 3

// console.log(x)


// var myNewArray = ["daad", 1, true, {
//     myObjectInArray: "adasdsadsadas"
// }]

// var myNewArray2 = myNewArray

// console.log(myNewArray2, "==>>myNewArray2")

// myNewArray2[0] = "sufiyan"

// console.log(myNewArray, "==>>myNewArray")
// console.log(myNewArray2, "==>>myNewArray2")

// var myNewArray3 = myNewArray2

// myNewArray3[3] = "agram shagram"

// console.log(myNewArray, "==>>myNewArray")
// console.log(myNewArray2, "==>>myNewArray2")
// console.log(myNewArray3, "==>>myNewArray3")



// var myCar = {
//     name: "corolla",
//     properties: ["red", "2016", "toyota"],
//     hybrid: true,
//     startCar: function () {
//         console.log("starting Car")
//     },
//     stopCar: function () {
//         console.log("stoping car")
//     }
// }

// var myCar2 = myCar

// console.log(myCar, "==>>myCar")


// myCar2.name = "Mercedes"

// console.log(myCar, "==>>myCar")
// console.log(myCar2, "==>>myCar2")

// var myName = ["sufiyan", "zakir"]

// var myName2 = myName


// myName2[0] = "naif"


//constructor function

// const student1 = {
//     name : "naif",
//     section: "E",
//     course: "web n mobile hybrid",
//     institute: "saylani"
// }
// const student2 = {
//     name : "hamza",
//     section: "E",
//     course: "web n mobile hybrid",
//     institute: "saylani"
// }
// const student3 = {
//     name : "reyyan",
//     section: "E",
//     course: "web n mobile hybrid",
//     institute: "saylani"
// }
// const student4 = {
//     name : "hammad",
//     section: "E",
//     course: "web n mobile hybrid",
//     institute: "saylani"
// }
// const student5 = {
//     name : "ahsan",
//     section: "E",
//     course: "web n mobile hybrid",
//     institute: "saylani"
// }


function Student(name, section, course, institute) {
    this.name = name
    this.section = section
    this.course = course
    this.institute = institute
    this.fullName = function (fatherName) {       //adam
        console.log(this.name + " " + fatherName)    //adam
    }
}

// Student.prototype.fullName = function (fatherName) {       //adam
//     console.log(this.name + " " + fatherName)    //adam
// }

const student1 = new Student("naif", "E", "web n mobile hybrid", "saylani")
const student2 = new Student("reyyan", "E", "web n mobile hybrid", "saylani")
const student3 = new Student("hammad", "E", "web n mobile hybrid", "saylani")
const student4 = new Student("zakir", "E", "web n mobile hybrid", "saylani")
const student5 = new Student("matilda", "E", "web n mobile hybrid", "saylani")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)

// this.fullName = function(fatherName) {       //adam
//     console.log(this.name + " " + fatherName)    //adam
// }

