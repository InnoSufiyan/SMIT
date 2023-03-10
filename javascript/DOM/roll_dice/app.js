//selecting elements
var player1Score = document.querySelector('.player1Score')
var player2Score = document.querySelector('.player2Score')
var player1DiceScore = document.querySelector('.player1DiceScore')
var player2DiceScore = document.querySelector('.player2DiceScore')

var newGameBtn = document.querySelector('.newGameBtn')
var diceImg = document.querySelector('.diceImg')
var rollDiceBtn = document.querySelector('.rollDiceBtn')
var holdBtn = document.querySelector('.holdBtn')

rollDiceBtn.addEventListener('click', RollDiceHandler)

function RollDiceHandler() {
    // var diceNumber = Math.round(Math.random() * 6)
    var diceNumber = Math.round(Math.random() * 5) + 1
    diceImg.classList.remove('hidden')
    // console.log(diceImg.src)
    diceImg.src = `./assets/${diceNumber}.png`
    if (diceNumber == 1) {
        player1DiceScore.textContent = 0;
    } else {
        player1DiceScore.textContent = Number(player1DiceScore.textContent) + diceNumber
    }
}

holdBtn.addEventListener('click', holdHandler)


function holdHandler() {
    player1Score.textContent = Number(player1Score.textContent) + Number(player1DiceScore.textContent)

    player1DiceScore.textContent = 0

    if(Number(player1Score.textContent) >= 30) {
        alert("Player 1 wins")
    }
}