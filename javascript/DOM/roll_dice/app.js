//selecting elements
var player1Score = document.querySelector('.player1Score')
var player2Score = document.querySelector('.player2Score')
var player1DiceScore = document.querySelector('.player1DiceScore')
var player2DiceScore = document.querySelector('.player2DiceScore')


var player1PreviousScore = document.querySelector('.player1PreviousScore')
var player2PreviousScore = document.querySelector('.player2PreviousScore')

var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')

var newGameBtn = document.querySelector('.newGameBtn')
var diceImg = document.querySelector('.diceImg')
var rollDiceBtn = document.querySelector('.rollDiceBtn')
var holdBtn = document.querySelector('.holdBtn')

rollDiceBtn.addEventListener('click', RollDiceHandler)

var currentPlayer = 1

var previousScore = [0, 0]

function RollDiceHandler() {
    // var diceNumber = Math.round(Math.random() * 6)
    var diceNumber = Math.round(Math.random() * 5) + 1
    diceImg.classList.remove('hidden')
    // console.log(diceImg.src)
    diceImg.src = `./assets/${diceNumber}.png`
    if (diceNumber == 1) {
        if (currentPlayer == 1) {

            player1PreviousScore.textContent = Number(player1DiceScore.textContent)

            player1DiceScore.textContent = 0;
            currentPlayer = 2
        } else {
            currentPlayer = 1


            player2PreviousScore.textContent = Number(player2DiceScore.textContent)

            player2DiceScore.textContent = 0;
        }
        player1.classList.toggle('active')
        player2.classList.toggle('active')
    } else {
        if (currentPlayer == 1) {
            player1DiceScore.textContent = Number(player1DiceScore.textContent) + diceNumber
        } else {
            player2DiceScore.textContent = Number(player2DiceScore.textContent) + diceNumber
        }
    }
}

holdBtn.addEventListener('click', holdHandler)


function holdHandler() {

    player1.classList.toggle('active')
    player2.classList.toggle('active')


    if (currentPlayer == 1) {
        currentPlayer = 2
        player1Score.textContent = Number(player1Score.textContent) + Number(player1DiceScore.textContent)
        player1PreviousScore.textContent = Number(player1DiceScore.textContent)

        player1DiceScore.textContent = 0
        if (Number(player1Score.textContent) >= 30) {
            alert("Player 1 wins")
        }


    } else {
        currentPlayer = 1
        player2Score.textContent = Number(player2Score.textContent) + Number(player2DiceScore.textContent)


        player2PreviousScore.textContent = Number(player2DiceScore.textContent)

        player2DiceScore.textContent = 0
        if (Number(player2Score.textContent) >= 30) {
            alert("Player 2 wins")
        }
    }

    console.log(currentPlayer, "==>>currentPlayer")

}