const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedInUser'))

console.log(isLoggedInUser, "==>>isLoggedInUser")


if (!isLoggedInUser) {
    window.location.href = "../index.html";
}

const emailAddress = document.getElementById("emailAddress")
const userName = document.getElementById("userName")
const mobNum = document.getElementById("mobNum")
const gender = document.getElementById("gender")
const description = document.getElementById("description")
const postInputBox = document.getElementById("postInputBox")
const postArea = document.getElementById("postAreaId")


emailAddress.innerText = isLoggedInUser.email
userName.innerText = isLoggedInUser.firstName + " " + isLoggedInUser.surName
mobNum.innerText = isLoggedInUser.mobileNum
gender.innerText = isLoggedInUser.gender

if (isLoggedInUser.description) {
    description.innerText = isLoggedInUser.description
} else {
    description.innerText = `No Description added`
}

function logoutHandler() {
    localStorage.removeItem('isLoggedInUser')
    window.location.href = "../index.html";
}

function postHandler() {
    console.log(postArea)
    // var postContent = `<div class="post my-5 bg-light rounded">
    // <div class="authorDetails d-flex ">
    //     <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
    //     <div>
    //         <h4 style="font-size: 15px;">UserName</h4>
    //         <h5 style="font-size: 12px;">User Description</h5>
    //         <h6 style="font-size: 10px;">10h</h6>
    //     </div>
    // </div>
    // <div class="postData">
    //     <p>
    //         ${postInputBox.value}
    //     </p>
    //     <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
    // </div>
    // </div>`



    var div = document.createElement('div')
    div.setAttribute('class', 'post my-5 bg-light rounded')

    div.innerHTML = ` <div class="authorDetails d-flex ">
    <img src="../assets/avatarDummy.png" alt="" class="profilePicture">
    <div>
        <h4 style="font-size: 15px;">UserName</h4>
        <h5 style="font-size: 12px;">User Description</h5>
        <h6 style="font-size: 10px;">10h</h6>
    </div>
</div>
<div class="postData">
    <p>
        ${postInputBox.value}
    </p>
    <img src="../assets/dummyPostImage.jpg" alt="" class="img-fluid">
</div>`

    postArea.appendChild(div)


}


// var posts = [
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
//     {
//         author: isLoggedInUser.email,
//         post: postInputBox.value
//     },
// ] 



