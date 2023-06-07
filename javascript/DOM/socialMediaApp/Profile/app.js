const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))

// const {date, email, firstName, mobileNum, password, surName} = isLoggedInUser

// console.log(date)
// console.log(email)
// console.log(firstName)
// console.log(mobileNum)
// console.log(password)
// console.log(surName)


if (!isLoggedInUser) {
    window.location.href = "../index.html";
}

const posts = JSON.parse(localStorage.getItem('posts')) || []






const emailAddress = document.getElementById("emailAddress")
const userName = document.getElementById("userName")
const mobNum = document.getElementById("mobNum")
const gender = document.getElementById("gender")
const description = document.getElementById("description")
const postInputBox = document.getElementById("postInputBox")
const postArea = document.getElementById("postAreaId")




// [selected posts of logged in user]
posts.filter((post) => post.userEmail === isLoggedInUser.email).forEach((post) => {
    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')

    div.innerHTML = `<div class="upperPart">
    <div class="authorDetails d-flex ">
        <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
        <div>
            <h4 style="font-size: 15px;">${post.userName}</h4>
            <h5 style="font-size: 12px;">${post.description || "No description added"}</h5>
            <h6 style="font-size: 10px;">${post.date.split('T')[0]}</h6>
            <h6 style="font-size: 10px;">${post.time}</h6>
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
    ${post.postContent}
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
</div>`
    //     div.innerHTML = `<div class="authorDetails d-flex ">
    //     <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
    //     <div>
    //         <h4 style="font-size: 15px;">${post.userName}</h4>
    //         <h5 style="font-size: 12px;">${post.description || "No description added"}</h5>
    //         <h6 style="font-size: 10px;">${post.date.split('T')[0]}</h6>
    //         <h6 style="font-size: 10px;">${post.time}</h6>
    //     </div>
    // </div>
    // <div class="postData">
    //     <p>
    //         ${post.postContent}
    //     </p>
    //     <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
    // </div>`

    postArea.prepend(div)
})


emailAddress.innerText = isLoggedInUser.email
userName.innerText = `${isLoggedInUser.firstName} ${isLoggedInUser.surName}`
mobNum.innerText = isLoggedInUser.mobileNum
gender.innerText = isLoggedInUser.gender

// if (isLoggedInUser.description) {    //undefined
//     description.innerText = isLoggedInUser.description
// } else {
//     description.innerText = `No Description added`
// }

// isLoggedInUser.description ? description.innerText = isLoggedInUser.description : description.innerText = "No description added"

// description.innerText = isLoggedInUser.description ? isLoggedInUser.description : "No description added"

description.innerText = isLoggedInUser.description || "No description added"

function logoutHandler() {
    localStorage.removeItem('isLoggedInUser')
    window.location.href = "../index.html";
}

function postHandler() {

    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')

    div.innerHTML = `<div class="upperPart">
    <div class="authorDetails d-flex ">
        <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
        <div>
            <h4 style="font-size: 15px;">${isLoggedInUser.firstName + " " + isLoggedInUser.surName}</h4>
            <h5 style="font-size: 12px;">${isLoggedInUser.description || "No description added"}</h5>
            <h6 style="font-size: 10px;">${new Date()}</h6>
            <h6 style="font-size: 10px;">${new Date().toLocaleTimeString()}</h6>
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
    ${postInputBox.value}
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
</div>`
    //     div.innerHTML = `<div class="authorDetails d-flex ">
    //     <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
    //     <div>
    //         <h4 style="font-size: 15px;">${isLoggedInUser.firstName + " " + isLoggedInUser.surName}</h4>
    //         <h5 style="font-size: 12px;">${isLoggedInUser.description || "No description added"}</h5>
    //         <h6 style="font-size: 10px;">${new Date()}</h6>
    //         <h6 style="font-size: 10px;">${new Date().toLocaleTimeString()}</h6>
    //     </div>
    // </div>
    // <div class="postData">
    //     <p>
    //         ${postInputBox.value}
    //     </p>
    //     <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
    // </div>`

    postArea.prepend(div)

    const postObj = {
        userName: `${isLoggedInUser.firstName} ${isLoggedInUser.surName}`,
        userEmail: isLoggedInUser.email,
        userDescription: isLoggedInUser.description,
        postContent: postInputBox.value,
        date: new Date(),
        time: new Date().toLocaleTimeString()
    }

    posts.push(postObj)

    localStorage.setItem('posts', JSON.stringify(posts))



}