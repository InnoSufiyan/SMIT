const menuBtns = ['All', 'Breakfast', 'Lunch', 'Shakes', 'Dinner', 'Evening Special', 'sunday food']

const menus = [
    {
        src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
        title: 'lunch',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '500Rs',
        category: 'lunch'
    },
    {
        src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
        title: 'Biryani',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '150000Rs',
        category: 'lunch'
    },
    {
        src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
        title: 'shakes',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '500Rs',
        category: 'shakes'
    },
    {
        src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
        title: 'evening special',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '500Rs',
        category: 'evening special'
    },
    {
        src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
        title: 'dinner',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at sapiente veritatis rerum qui magnam in pariatur sit dolor debitis?',
        price: '500Rs',
        category: 'dinner'
    },
]

//title
//src
//desc
//price

const myBtnsDiv = document.querySelector('.buttons')
const menuArea = document.querySelector('.menuArea')

console.log(myBtnsDiv)
console.log(menuArea)

const myBtnsArr = []

menuBtns.forEach((btn) => {
    // '<button onclick="console.log(all)">All</button>
    const string = `<button class="meraButton" onclick='filterFunction("${btn}")'>${btn}</button>`
    myBtnsArr.push(string)
})

const menuArray = menus.map((menu) => {
    return `<div class="foodItem box"> <img width="200px" src=${menu.src} />
    <p>${menu.title}</p>
    <p>${menu.desc}</p>
    <p>${menu.price}</p>
    </div>
    `
    
})

console.log(menuArray)
console.log(menus)

myBtnsDiv.innerHTML = myBtnsArr.join("")
menuArea.innerHTML = menuArray.join("")

// function filterFunction() {

// }

const filterFunction = (filter) => {
    console.log(filter)

    if (filter === 'All') {
        menuArea.innerHTML = menuArray.join("")
    } else {
        //true
        const filteredArray = menus.filter((menu) => menu.category.toLowerCase() === filter.toLowerCase()).map((menu) => {
            return `<div class="foodItem box"> <img width="200px" src=${menu.src} />
    <p>${menu.title}</p>
    <p>${menu.desc}</p>
    <p>${menu.price}</p>
    </div>
    `
        })
        console.log(filteredArray, "==>>filtered Array")
        menuArea.innerHTML = filteredArray.join("")
    }
}






// <button class="filter-btn"> All </button>
// <button class="filter-btn"> Dinner </button>
// <button class="filter-btn"> Lunch </button>
// <button class="filter-btn"> Shakes </button>