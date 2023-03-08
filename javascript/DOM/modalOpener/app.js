var modalButton = document.querySelectorAll('.modalButton')
var overlay = document.querySelector('.overlay')
var modal = document.querySelector('.modal')
var close = document.querySelector('.close')
const body = document.querySelector('body')

console.log(body, "==>>body")

body.addEventListener('keydown', (e) => {
    console.log(e.key, "==>>yeh wala key dabai hai")
    if (e.key === 'Escape') {
        overlay.classList.add('hidden')
        modal.classList.add('hidden')
    }
})


for (i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener('click', () => {
        overlay.classList.remove('hidden')
        modal.classList.remove('hidden')
    })
}

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})

close.addEventListener('click', () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
})
