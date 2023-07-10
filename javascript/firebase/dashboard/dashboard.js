import {
    auth,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut
} from '../firebaseConfig.js'

const userNameHTML = document.getElementById('userName')
const emailAddressHTML = document.getElementById('emailAddress')
const mobNumHTML = document.getElementById('mobNum')
const firstNameHTML = document.getElementById('firstName')
const lastNameHTML = document.getElementById('lastName')
const logoutBtn = document.getElementById('logoutBtn')

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid)
        getUserData(uid)
        // ...
    } else {
        // User is signed out
        // ...
        console.log("sign out")
        window.location.href = '../login/login.html'
    }
});


async function getUserData(uid) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const { userName, lastName, firstName, phNum, email } = docSnap.data()
            userNameHTML.textContent = userName
            emailAddressHTML.textContent = email
            mobNumHTML.textContent = phNum
            firstNameHTML.textContent = firstName
            lastNameHTML.textContent = lastName
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error, "==>>error in get User Data")
    }
}

const logoutHandler = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signout successfully")
        window.location.href = '../login/login.html'
    }).catch((error) => {
        // An error happened.
    });

}

logoutBtn.addEventListener('click', logoutHandler)