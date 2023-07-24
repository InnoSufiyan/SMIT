import {app, db, auth, signInWithEmailAndPassword} from '../firebaseConfig.js'

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