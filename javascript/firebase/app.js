
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getFirestore, collection, addDoc, setDoc, doc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwBF3KuPeec5SLGlyOYyIrNwqpYkGe6fA",
    authDomain: "jobs-45474.firebaseapp.com",
    projectId: "jobs-45474",
    storageBucket: "jobs-45474.appspot.com",
    messagingSenderId: "167672939141",
    appId: "1:167672939141:web:6128592b657f1994665fec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const username = document.querySelector('#username')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const phNum = document.querySelector('#phNum')
const email = document.querySelector('#email')
const password = document.querySelector('#inputPassword')

const signupBtn = document.querySelector('#signup')

signupBtn.addEventListener('click', signupHandler)

async function signupHandler() {
    try {
        const response = await createUserWithEmailAndPassword(auth, email.value, password.value)

        console.log(response, "==>>response")

        if (response.user) {
            addUserHandler(response.user.uid)
        }
    } catch (error) {
        console.log(error)
    }
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     if (user) {
    //         console.log("user registered successfully, going to save data now")
    //         addUserHandler()
    //         // window.location.href = 'login.html'
    //     }
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode)
    //     console.log(errorMessage)
    //     // ..
    // });
}

async function addUserHandler(uid) {
    try {
        const response = await setDoc(doc(db, "users", uid), {
            firstName: firstName.value,
            lastName: lastName.value,
            userName: username.value,
            email: email.value,
            phNum: phNum.value,
        });

        window.location.href = './login/login.html'
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}