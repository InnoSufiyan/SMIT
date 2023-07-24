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
    getDocs,
    ref,
    storage,
    getDownloadURL,
    uploadBytesResumable,
    deleteDoc,
    updateDoc
} from '../firebaseConfig.js'

let editPostFlag = false
let postIdGlobal;

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
const uploadImage = document.getElementById('uploadImageBtn')

editPostFlag ? postBtn.innerText = "Update" : postBtn.innerText = "Post"




getPosts()

let currentLoggedInUser;
let ppOfLoggedInUser

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
            ppOfLoggedInUser = profilePicture
            console.log(profilePicture, "==>>profilePicture")
            userNameHTML.textContent = userName
            emailAddressHTML.textContent = email || 'No email updated'
            mobNumHTML.textContent = phNum
            firstNameHTML.textContent = firstName
            lastNameHTML.textContent = lastName
            dashBoardpp.src = profilePicture || '../assets/pp.jpg'
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


    console.log("post Handler working")





    const file = uploadImage.files[0]

    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);


    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                console.log('File available at', downloadURL);

                try {
                    const response = await addDoc(collection(db, "posts"), {
                        postContent: postInputBox.value,
                        authorId: currentLoggedInUser,
                        postImageUrl: downloadURL
                    });

                    // console.log(response.id)
                    getPosts()
                } catch (e) {
                    console.error("Error adding document: ", e);
                }



                // await setDoc(doc(db, "users", currentLoggedInUser), {
                //     firstName: firstName.value,
                //     lastName: lastName.value,
                //     userName: userName.value,
                //     phNum: mobileNumber.value,
                //     profilePicture: downloadURL
                // });
            });
        }
    );



















    // console.log(postInputBox.value)
    // console.log(currentLoggedInUser, "==>>currentLoggedInUser")
    // try {
    //     const response = await addDoc(collection(db, "posts"), {
    //         postContent: postInputBox.value,
    //         authorId: currentLoggedInUser
    //     });

    //     // console.log(response.id)
    //     getPosts()
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }
}


async function updatePostHandler() {
    console.log("update post Handler working")

    const file = uploadImage.files[0]

    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);


    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                console.log('File available at', downloadURL);

                try {
                    const washingtonRef = doc(db, "posts", postIdGlobal);
                    const response = await updateDoc(washingtonRef, {
                        postContent: postInputBox.value,
                        authorId: currentLoggedInUser,
                        postImageUrl: downloadURL
                    });

                    // await updateDoc(washingtonRef, {
                    //     postContent: "kuch bhi"
                    // });

                    // console.log(response.id)
                    getPosts()
                } catch (e) {
                    console.error("Error adding document: ", e);
                }



                // await setDoc(doc(db, "users", currentLoggedInUser), {
                //     firstName: firstName.value,
                //     lastName: lastName.value,
                //     userName: userName.value,
                //     phNum: mobileNumber.value,
                //     profilePicture: downloadURL
                // });
            });
        }
    );
}

async function editPostHandler(postId) {
    console.log(postId, "edit button working properly")
    editPostFlag = true
    postBtn.innerText = "Update"
    postBtn.removeEventListener('click', postHandler)
    postBtn.addEventListener('click', updatePostHandler)
    postIdGlobal = postId
    // const washingtonRef = doc(db, "posts", postId);

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //     postContent: "kuch bhi"
    // });
}
async function deletePostHandler(postId) {
    console.log(postId, "delete button working properly")

    await deleteDoc(doc(db, "posts", postId));
    alert("Your post deleted successfully")
    getPosts()
}

async function getPosts() {
    postArea.innerHTML = ''
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let postId = doc.id
        const { authorId, postContent, postImageUrl } = doc.data()


        const authorDetails = await getAuthorData(authorId)


        const postElement = document.createElement('div')
        postElement.setAttribute('class', 'post my-5 bg-light rounded')
        const content = `
        <div class="upperPart">
        <div class="authorDetails d-flex ">
        <img src=${authorDetails.profilePicture || '../assets/pp.jpg'} alt="" class="profilePicture">
        <div>
                                    <h4 style="font-size: 15px;">${authorDetails?.userName} </h4>
                                    <h5 style="font-size: 12px;">${authorDetails?.email || 'No email updated'}</h5>
                                    <h6 style="font-size: 10px;">10h</h6>
                                </div>
                            </div>
                            ${authorId === currentLoggedInUser ? `
                                <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    :
                                </button>
                                <ul class="dropdown-menu">
                                    <li onclick="editPostHandler('${postId}')" class="dropdown-item">Edit</li>
                                    <li onclick="deletePostHandler('${postId}')" class="dropdown-item">Delete</li>
                                </ul>
                            </div>
                                ` : ''
            }
                            
                        </div>
                        <div class="postData">
                            <p>
                            ${postContent}
                            </p>
                            <img src=${postImageUrl} alt="" class="img-fluid">
                        </div>
                        <div class="buttons">
                            <p>Like</p>
                            <p>Comment</p>
                            <p>Share</p>
                        </div>
                        <div class="commentInputArea">
                            <img src=${ppOfLoggedInUser || '../assets/pp.jpg'} class="profilePicture" alt="">
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


window.editPostHandler = editPostHandler
window.deletePostHandler = deletePostHandler
