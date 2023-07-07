
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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
const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginInputPassword')

const loginBtn = document.querySelector('#login')

loginBtn.addEventListener('click', loginHandler)

function loginHandler() {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user) {
                window.location.href = '../dashboard/dashboard.html'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        });
}