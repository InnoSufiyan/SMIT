import { auth, db, app, getFirestore, collection, query, where, getDocs, createUserWithEmailAndPassword, setDoc, onAuthStateChanged, doc } from '../firebaseConfig.js'

const myUsersArea = document.querySelector('.myUsersArea')


let currentLoggedInUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(uid)
        currentLoggedInUser = uid
        // ...
    } else {
        // User is signed out
        // ...
        // console.log("sign out")
        window.location.href = '../login/login.html'
    }
});


async function getAllUsers() {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const userCompleteDetails = doc.data()
        console.log(userCompleteDetails, "==>>userCompleteDetails")
        const { userName, email, phNum, profilePicture, firstName, lastName, followers } = doc.data()

        console.log(followers, "==>>followers")
        console.log(profilePicture, "==>>profilePicture")

        const columnHtml = document.createElement('div')
        columnHtml.setAttribute('class', 'col')

        const content = `
        <div class="col">
        <div class="card" style="width: 18rem;">
            <img src=${profilePicture !== 'undefined' && profilePicture || '../assets/pp.jpg'} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <p class="card-text">User Email: ${email} <br/> User Phone: ${phNum}</p>
                <a href="#" class="btn btn-primary" onclick='followHandler("${doc.id}", "${profilePicture}", "${userName}", "${email}", "${phNum}", "${firstName}", "${lastName}", "${followers}")'>${followers?.includes(currentLoggedInUser) ? 'UnFollow' : 'Follow'}</a>
            </div>
        </div>
    </div>
        `
        columnHtml.innerHTML = content

        myUsersArea.appendChild(columnHtml)

    });
}

getAllUsers()

async function followHandler(followingUid, pp, userName,
    email,
    phNum,
    firstName,
    lastName, followers) {
    console.log(followingUid, pp, userName,
        email,
        phNum,
        firstName,
        lastName, followers, "==>>follow handler working")

    const myFollowers = followers !== 'undefined' ? followers.split(',') : followers

    console.log(myFollowers, "==>>myFollowers")

    console.log(currentLoggedInUser, "==>>currentLoggedInUser")

    if (myFollowers?.includes(currentLoggedInUser)) {
        console.log("unfollowing")

        const myIndexNumber = myFollowers?.indexOf(currentLoggedInUser)
        myFollowers.splice(myIndexNumber, 1)
        console.log(myFollowers, "==>>myFollowers")
        await setDoc(doc(db, "users", followingUid), {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phNum: phNum,
            profilePicture: pp,
            followers: myFollowers
        });

    } else {
        await setDoc(doc(db, "users", followingUid), {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phNum: phNum,
            profilePicture: pp,
            followers: myFollowers !== 'undefined' ? [...myFollowers, currentLoggedInUser] : [currentLoggedInUser]
        });

        console.log('followers functionality done')
    }
}


window.followHandler = followHandler