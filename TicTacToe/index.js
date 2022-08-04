var eachBox = document.querySelectorAll(".box")

const box1 = document.getElementById("box-1")
const box2 = document.getElementById("box-2")
const box3 = document.getElementById("box-3")
const box4 = document.getElementById("box-4")
const box5 = document.getElementById("box-5")
const box6 = document.getElementById("box-6")
const box7 = document.getElementById("box-7")
const box8 = document.getElementById("box-8")
const box9 = document.getElementById("box-9")

const textBox = document.getElementById("winner-text")
var reset = document.getElementById("reset")
var scoreBoard = document.querySelector(".play-till")
var closeScoreBoard = document.getElementById("close-score")



var currentPlayer = 1
var winner = null
var winnerPlayer;
var winnerText = "Keep Playing"


// marked-0 is a player one
// marked-x is a player two


window.addEventListener("DOMContentLoaded", () => {
    textBox.innerHTML = winnerText
    scoreBoard.classList.add("show-score-tabs")

    winnerText = "welcome"
    textBox.innerHTML = winnerText

})
closeScoreBoard.addEventListener("click", () => {
    scoreBoard.classList.remove("show-score-tabs")
})

function playerWinning(className, player) {

    function displayResults() {
        winner = true
        winnerPlayer = player
        winnerText = `Winner is ${player}`
        textBox.innerHTML = winnerText
        for (item of eachBox) {
            item.classList.add("pointer-none")
        }
    }

    if (box1.classList.contains(className) && box2.classList.contains(className) && box3.classList.contains(className)) {
        displayResults()
    }
    if (box1.classList.contains(className) && box4.classList.contains(className) && box7.classList.contains(className)) {
        displayResults()
    }
    if (box1.classList.contains(className) && box5.classList.contains(className) && box9.classList.contains(className)) {
        displayResults()
    }
    if (box3.classList.contains(className) && box6.classList.contains(className) && box9.classList.contains(className)) {
        displayResults()
    }
    if (box3.classList.contains(className) && box5.classList.contains(className) && box7.classList.contains(className)) {
        displayResults()
    }
    if (box4.classList.contains(className) && box5.classList.contains(className) && box6.classList.contains(className)) {
        displayResults()
    }
    if (box7.classList.contains(className) && box8.classList.contains(className) && box9.classList.contains(className)) {
        displayResults()
    }
    if (box2.classList.contains(className) && box5.classList.contains(className) && box8.classList.contains(className)) {
        displayResults()
    }


}

var PlayerOscore = 0
var PlayerXscore = 0
var playTill = 0


eachBox.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (currentPlayer == 1) {
            currentPlayer = 2
            if (!e.currentTarget.classList.contains("marked-x")) {
                e.currentTarget.classList.add("marked-o")
                e.currentTarget.classList.add("pointer-none")
            }
        }
        else {
            currentPlayer = 1
            if (!e.currentTarget.classList.contains("marked-o")) {

                e.currentTarget.classList.add("marked-x")
                e.currentTarget.classList.add("pointer-none")
            }

        }
        // winner-1 
        playerWinning("marked-o", "O")
        // winner-2
        playerWinning("marked-x", "X")

        if (winner == true) {
            setTimeout(() => {

                for (var item of eachBox) {
                    item.classList.remove("marked-o")
                    item.classList.remove("marked-x")
                    item.classList.remove("pointer-none")
                }
                winner = false
                winnerPlayer = ""
                winnerText = "Keep Playing"
            }, 1000)
        }
        if (winnerPlayer == "O") {
            PlayerOscore += 1
            document.getElementById("count-player-1").innerHTML = PlayerOscore
            document.querySelector(".myspan").classList.add("marked-o")
            document.querySelector(".myspan").classList.remove("marked-x")
            
        }
        if (winnerPlayer == 'X') {
            PlayerXscore += 1
            document.getElementById("count-player-2").innerHTML = PlayerXscore
            document.querySelector(".myspan").classList.add("marked-x")
            document.querySelector(".myspan").classList.remove("marked-o")
        }
        console.log(playTill)
        if (PlayerOscore >= playTill || PlayerXscore >= playTill) {

            // player win

            document.querySelector(".winner-text").classList.add("show-winner")

            PlayerOscore = 0
            PlayerXscore = 0

            document.getElementById("count-player-1").innerHTML = PlayerOscore
            document.getElementById("count-player-2").innerHTML = PlayerXscore


        }
    })
})

reset.addEventListener("click", () => {
    for (var item of eachBox) {
        item.classList.remove("marked-o")
        item.classList.remove("marked-x")
        item.classList.remove("pointer-none")
    }
    winnerText = "welcome"
})
// show winner text

var closeBtn = document.getElementById("close")
var scoreBtns = document.querySelectorAll(".score-btn")

closeBtn.addEventListener("click", () => {
    document.querySelector(".winner-text").classList.remove("show-winner")
    scoreBoard.classList.add("show-score-tabs")
})

scoreBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        var currentScore = e.currentTarget.dataset.score

        switch (currentScore) {
            case "5":
                playTill = 5
                winnerText = "Play till 5"
                break
            case "10":
                playTill = 10
                winnerText = "Play till 10"
                break
            case "15":
                playTill = 15
                winnerText = "Play till 15"
                break
            case "20":
                playTill = 20
                winnerText = "Play till 20"
                break
        }

        textBox.innerHTML = winnerText
        scoreBoard.classList.remove("show-score-tabs")
    })
})


 