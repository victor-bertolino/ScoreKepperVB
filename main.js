const t1 = {
    score: 0,
    button: document.querySelector('#t1Btn'),
    display: document.querySelector('#t1Display')
}

const t2 = {
    score: 0,
    button: document.querySelector('#t2Btn'),
    display: document.querySelector('#t2Display')
}

const resetBtn = document.querySelector('#resetBtn')
const playToBtn = document.querySelector('#playTo')

let winningScore = 25
let isGameOver = false

playToBtn.addEventListener('change', () => {
    winningScore = parseInt(playToBtn.value)
    reset()
})

function updateScore(team, opponent) {
    if (isGameOver === false) {
        team.score++
        team.display.textContent = team.score
        if ((team.score === (winningScore - 1)) && (opponent.score === (winningScore - 1))) {
            winningScore++
        }
        if (team.score === winningScore) {
            isGameOver = true
        }
    }
}

t1.button.addEventListener('click', () => {
    updateScore(t1, t2)
})

t2.button.addEventListener('click', () => {
    updateScore(t2, t1)
})

function reset() {
    winningScore = parseInt(playToBtn.value)
    isGameOver = false
    t1.score = 0
    t1.display.textContent = t1.score
    t2.score = 0
    t2.display.textContent = t2.score
}

resetBtn.addEventListener('click', () => {
    reset()
})
