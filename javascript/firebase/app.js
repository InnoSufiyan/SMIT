
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

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
const email = document.querySelector('#email')
const password = document.querySelector('#inputPassword')

const signupBtn = document.querySelector('#signup')

signupBtn.addEventListener('click', signupHandler)

function signupHandler() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                console.log("user registered successfully, going to save data now")
                addUserHandler()
                // window.location.href = 'login.html'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
}

async function addUserHandler() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: username.value,
            email: email.value
        });
        console.log("Document written with ID: ", docRef.id);
        if (docRef.id) {
            console.log("document is saved")
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 5000)
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}