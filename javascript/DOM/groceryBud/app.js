const input = document.querySelector('input')
const button = document.querySelector('.submit')
const editButton = document.querySelector('.edit')
const itemList = document.querySelector('.itemList')
const clearBtn = document.querySelector('.clear')
const alertPara = document.querySelector('.alert')


console.log(input)
console.log(button)
console.log(itemList)
console.log(alertPara)

let editedUID = null

// let items = JSON.parse(localStorage.getItem('myList')) || []
let items = JSON.parse(localStorage.getItem('myList')) || []

console.log(items, "=>>items")

itemList.innerHTML = items.join("")

const alertFoo = (alertText) => {
    alertPara.innerHTML = alertText
    alertPara.style.visibility = "visible"

    setTimeout(() => {
        alertPara.style.visibility = "hidden"

    }, 3000)
}

const editFoo = (uId) => {
    console.log("edit chal raha hai", uId)

    editedUID = uId

    button.style.display = 'none'

    editButton.style.display = 'inline-block'

    editButton.addEventListener('click', editProcess)

    const myList = Array.from(itemList.childNodes)

    console.log(itemList.childNodes)
    console.log(myList)

    const filteredData = myList.filter((singleItem) => singleItem.id === uId)

    console.log(filteredData)

    input.value = filteredData[0].querySelector('p').innerText
}


const editProcess = () => {

    const indexNum = items.findIndex((singleItem) => singleItem.includes(editedUID))

    console.log(indexNum, "===>>indexNum")

    console.log(input.value, "===>>input value")

    items.splice(indexNum, 1, `<div id="${editedUID}" class="item">
    <p>${input.value}</p>
    <button onclick="editFoo('${editedUID}')">Edit</button>
    <button onclick="deleteFoo('${editedUID}')">Delete</button>
    </div>`)

    console.log(items, "==>>items after edit")

    itemList.innerHTML = items.join("")

    localStorage.setItem('myList', JSON.stringify(items))

    button.innerText = 'Submit'

    editButton.style.display = 'none'

    button.style.display = 'inline-block'

    setTimeout(() => {
        input.value = ""
    }, 1000)
}







const deleteFoo = (uId) => {
    console.log("delete chal raha hai", uId)

    // const meraItemArray = Array.from(itemList.childNodes)

    console.log(items, "==>>items")

    const indexNum = items.findIndex((singleItem) => singleItem.includes(uId))

    console.log(indexNum, "===>>indexNum")

    items.splice(indexNum, 1)

    console.log(items, "==>>items after delete")

    itemList.innerHTML = items.join("")

    alertFoo(`Your item is deleted`)

    localStorage.setItem('myList', JSON.stringify(items))

    // const filteredData = meraItemArray.filter((singleItem) => singleItem.id !== uId)

    // console.log(filteredData)

    // items = filteredData.map((singleItem) => `<div id="${singleItem.id}" class="item">
    // <p>${singleItem.querySelector('p').textContent}</p>
    // <button onclick="editFoo('${singleItem.id}')">Edit</button>
    // <button onclick="deleteFoo('${singleItem.id}')">Delete</button>
    // </div>`)

    // itemList.innerHTML = items.join("")
}

const submission = () => {

    if (input.value === "") {
        alertFoo(`bhai kuch likh to ley`)
        return
    }


    const uniqueID = new Date().getTime()

    console.log(uniqueID)



    console.log(input.value)
    const itemData = `<div id="${uniqueID}" class="item">
    <p>${input.value}</p>
    <button onclick="editFoo('${uniqueID}')">Edit</button>
    <button onclick="deleteFoo('${uniqueID}')">Delete</button>
    </div>`

    items.push(itemData)
    itemList.innerHTML = items.join("")


    alertFoo(`${input.value} is added in your bucket`)
    input.value = ""


    localStorage.setItem('myList', JSON.stringify(items))

}

const clearFoo = () => {
    items = []
    itemList.innerHTML = ``

    alertFoo(`All Items are cleared`)
}

button.addEventListener('click', submission)
clearBtn.addEventListener('click', clearFoo)