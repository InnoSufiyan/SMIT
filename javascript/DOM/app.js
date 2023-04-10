// var email = document.getElementById('email')
// var pass = document.getElementById('pass')

// console.log(email, "=>>email")

// console.log(pass, "=>>pass")



// function validateEmail() {
//     const falaana = "dhimkana"
//     if(email.value === "" || !email.value.includes('.com') || !email.value.includes('@')) {
//         console.log("Kaddu, email to likh")
//     }
// }

// var li = document.querySelector('.three')
// var ul = document.querySelector('ul')

// console.log(ul.childNodes[3])
// var firstLi = ul.childNodes[3]

// console.log(firstLi.firstChild.nodeValue)




// console.log(li.nextSibling.nextSibling.nextSibling.nextSibling)
// li.previousElementSibling.previousElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'green'

// li.style.backgroundColor = 'blue'

// var ul = document.querySelector('ul')

// console.log(ul.children[3].firstChild.getAttribute('href'))
// ul.children[3].firstChild.setAttribute('class', 'meraAnchor abc xyz')

// console.log(ul.children[3].firstChild.classList)

// var myDiv = document.querySelector('#myDiv')

// console.log(myDiv.innerHTML, "==>> myDiv")

// myDiv.innerHTML = `<h1>adadasdads</h1><h1>adadasdads</h1><h1>adadasdads</h1>`;

// console.log(myDiv.innerHTML, "==>> myDiv")
// console.log(myDiv, "==>> myDiv")

// console.log(myDiv, "==>>myDiv")
// var meraElement = document.createElement('h1')

// console.log(meraElement, "==>>meraElement")

// myDiv.appendChild(meraElement)

// var meraText = document.createTextNode('mera text h1 k liye')

// meraElement.appendChild(meraText)

// console.log(myDiv, "==>>myDiv")

const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')


console.log(button)
console.log(input)

ul.replaceChild()


button.addEventListener('click', () => {

    console.log(input.value, "===>>direct input")
    console.log(input.value.trim(), "===>>input trimmed")



    if(input.value.trim() === "") {

        input.value = ""
        return "dadsa"
    }

    console.log(input.value)
    console.log(ul)
    const li = document.createElement('li')

    li.innerText= input.value

    ul.appendChild(li)

    input.value = ""

    console.log(ul)

})