import {auth, db, app, getFirestore, collection, query, where, getDocs, createUserWithEmailAndPassword} from '../firebaseConfig.js'

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