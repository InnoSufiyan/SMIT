import {
    auth,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
    setDoc,
    addDoc,
    collection,
    getDocs
} from '../firebaseConfig.js'

const userNameHTML = document.getElementById('userName')
const emailAddressHTML = document.getElementById('emailAddress')
const mobNumHTML = document.getElementById('mobNum')
const firstNameHTML = document.getElementById('firstName')
const lastNameHTML = document.getElementById('lastName')
const dashBoardpp = document.getElementById('dashBoardPp')
const logoutBtn = document.getElementById('logoutBtn')
const postBtn = document.getElementById('postBtn')
const postInputBox = document.getElementById('postInputBox')
const postArea = document.getElementById('postAreaId')

getPosts()

let currentLoggedInUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(uid)
        getUserData(uid)
        currentLoggedInUser = uid
        // ...
    } else {
        // User is signed out
        // ...
        // console.log("sign out")
        window.location.href = '../login/login.html'
    }
});


async function getUserData(uid) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            const { userName, lastName, firstName, phNum, email, profilePicture } = docSnap.data()
            console.log(profilePicture, "==>>profilePicture")
            userNameHTML.textContent = userName
            emailAddressHTML.textContent = email
            mobNumHTML.textContent = phNum
            firstNameHTML.textContent = firstName
            lastNameHTML.textContent = lastName
            dashBoardpp.src = profilePicture
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
        // console.log("signout successfully")
        window.location.href = '../login/login.html'
    }).catch((error) => {
        // An error happened.
    });

}

logoutBtn.addEventListener('click', logoutHandler)
postBtn.addEventListener('click', postHandler)


async function postHandler() {
    // console.log(postInputBox.value)
    // console.log(currentLoggedInUser, "==>>currentLoggedInUser")
    try {
        const response = await addDoc(collection(db, "posts"), {
            postContent: postInputBox.value,
            authorId: currentLoggedInUser
        });

        // console.log(response.id)
        getPosts()
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function getPosts() {
    postArea.innerHTML = ''
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const { authorId, postContent } = doc.data()


        const authorDetails = await getAuthorData(authorId)


        const postElement = document.createElement('div')
        postElement.setAttribute('class', 'post my-5 bg-light rounded')
        const content = `
        <div class="upperPart">
        <div class="authorDetails d-flex ">
        <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
        <div>
                                    <h4 style="font-size: 15px;">${authorDetails?.userName} </h4>
                                    <h5 style="font-size: 12px;">${authorDetails?.email}</h5>
                                    <h6 style="font-size: 10px;">10h</h6>
                                </div>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    :
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li><a class="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="postData">
                            <p>
                            ${postContent}
                            </p>
                            <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="buttons">
                            <p>Like</p>
                            <p>Comment</p>
                            <p>Share</p>
                        </div>
                        <div class="commentInputArea">
                            <img src="../assets/avatarDummy.png" class="profilePicture" alt="">
                            <input id="commentInputBox" type="text" class="commentInput">
                            <button onclick="commentHandler()">Comment</button>
                        </div>
    `
        postElement.innerHTML = content
        // console.log(postElement)
        postArea.appendChild(postElement)

    });





}



async function getAuthorData(authorUid) {
    console.log(authorUid, "==>>authorUid")


    const docRef = doc(db, "users", authorUid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}