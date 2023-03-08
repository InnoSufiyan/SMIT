var myUserInput = document.querySelector('.userInput')

var checkButton = document.querySelector('.checkButton')

var score = document.querySelector('.score')
var highScore = document.querySelector('.highScore')

checkButton.addEventListener('click', () => {

    if (score.textContent > 0) {



        var myNumber = Math.round(Math.random() * 20)
        console.log(myNumber)
        console.log(myUserInput.value)
        console.log(score.textContent)

        if (myUserInput.value == myNumber) {
            alert("You win")
            score.textContent = +score.textContent + 1
            if (highScore.textContent < score.textContent) {
                highScore.textContent = score.textContent
            }

        } else {
            console.log("You loose")
            score.textContent = +score.textContent - 1
        }
    } else {
        console.log("sorry aap game nai khel saktey, please try again")
    }
})

