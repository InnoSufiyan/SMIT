const input = document.querySelector('input')
const button = document.querySelector('.submit')
const itemList = document.querySelector('.itemList')
const clearBtn = document.querySelector('.clear')
const alertPara = document.querySelector('.alert')


console.log(input)
console.log(button)
console.log(itemList)
console.log(alertPara)

let items = []

const alertFoo = (alertText) => {
    alertPara.innerHTML = alertText
    alertPara.style.visibility = "visible"

    setTimeout(() => {
        alertPara.style.visibility = "hidden"

    }, 3000)
}

const editFoo = (uId) => {
    console.log("edit chal raha hai", uId)

    //itemList k tamam items main == uId
    // input field for edited data
    // itemList specifici item.innerHtml change through input data
}
const deleteFoo = (uId) => {
    console.log("delete chal raha hai", uId)

    const meraItemArray = Array.from(itemList.childNodes)


    const filteredData = meraItemArray.filter((singleItem) => singleItem.id !== uId)

    console.log(filteredData)

    items = filteredData.map((singleItem) => `<div id="${singleItem.id}" class="item">
    <p>${singleItem.querySelector('p').textContent}</p>
    <button onclick="editFoo('${singleItem.id}')">Edit</button>
    <button onclick="deleteFoo('${singleItem.id}')">Delete</button>
    </div>`)

    itemList.innerHTML = items.join("")



}

const submission = () => {
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

}

const clearFoo = () => {
    items = []
    itemList.innerHTML = ``

    alertFoo(`All Items are cleared`)
}

button.addEventListener('click', submission)
clearBtn.addEventListener('click', clearFoo)