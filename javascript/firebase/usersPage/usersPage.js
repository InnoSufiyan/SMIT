import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getFirestore, collection, query, where, getDocs
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

const myUsersArea = document.querySelector('.myUsersArea')


async function getAllUsers() {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const {userName, email, phNum} = doc.data()

        const columnHtml = document.createElement('div')
        columnHtml.setAttribute('class', 'col')
        
        const content = `
        <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <p class="card-text">User Email: ${email} <br/> User Phone: ${phNum}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
        `
        columnHtml.innerHTML = content

        myUsersArea.appendChild(columnHtml)
    });
}

getAllUsers()