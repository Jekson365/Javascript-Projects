var circles = document.querySelectorAll(".circle")
var startBtn = document.getElementById("start")
var restartBtn = document.getElementById("restart")
var gameLevelText = document.getElementById("game-level")
var randomNumbersContainer = []
var WinnerBalls = []
var pinkBallsCount = 0
var redBallCount = 0
var gameLevel = 0
var gameLevelTime = 1001
var circleCount = 16




startBtn.addEventListener("click", () => {
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * circles.length)
        if (!randomNumbersContainer.includes(randomNumber)) {
            randomNumbersContainer.push(randomNumber)
        }
    }
    for (num of randomNumbersContainer) {
        circles[num].classList.add("hidden-figure")

        // cover true sides
        setTimeout(() => {
            for (num of randomNumbersContainer) {
                circles[num].classList.add("cover-hidden-figure")
            }

        }, gameLevelTime)
    }

})


circles.forEach((item) => {
    item.addEventListener("click", (e) => {
        var currentClassList = e.currentTarget.classList
        if (currentClassList.contains("cover-hidden-figure")) {
            currentClassList.remove("cover-hidden-figure")
            WinnerBalls.push(1)
            if (WinnerBalls.length == randomNumbersContainer.length) {
                setTimeout(() => {
                    resetGame()
                    console.log("you win")
                    raiseGameLevel()

                }, 1000)
            }
            pinkBallsCount += 1
             
            document.getElementById("hidden-balls").innerHTML = pinkBallsCount
        }
        else {
            if (!currentClassList.contains("hidden-figure")) {
                currentClassList.add("empty")
                redBallCount += 1
                document.getElementById("wrong-balls").innerHTML = redBallCount
            }
        }
    })
})
// reset game function 

function resetGame() {
    for (cir of circles) {
        cir.classList.remove("hidden-figure")
        cir.classList.remove("cover-hidden-figure")
        cir.classList.remove("empty")
        WinnerBalls = []
        randomNumbersContainer = []
    }
}
function raiseGameLevel() {
    gameLevel += 1
    gameLevelTime -= 200
    gameLevelText.textContent = gameLevel
}
restartBtn.addEventListener("click", () => {
    resetGame()
})
function resetWholeGame() {
    redBallCount = 0
    pinkBallsCount = 0
    gameLevel = 0
    gameLevelTime = 1000
    for (cir of circles) {
        cir.classList.remove("hidden-figure")
        cir.classList.remove("cover-hidden-figure")
        cir.classList.remove("empty")
        WinnerBalls = []
        randomNumbersContainer = []

    }
    document.getElementById("hidden-balls").innerHTML = pinkBallsCount
    document.getElementById("wrong-balls").innerHTML = redBallCount
    gameLevelText.textContent = gameLevel
    
}
const finalPink = document.getElementById("pink")
const finalRed = document.getElementById("red")
const finalScore = document.getElementById("lvl")

setInterval(() => {
    if (redBallCount > pinkBallsCount) {
        document.querySelector(".end-banner").classList.add("show-banner")
        finalPink.textContent = pinkBallsCount
        finalRed.textContent = redBallCount
        finalScore.textContent = gameLevel
    }
}, 100)


document.querySelector(".end-banner").addEventListener("click", () => {
    document.querySelector(".end-banner").classList.remove("show-banner")
    resetWholeGame()
})