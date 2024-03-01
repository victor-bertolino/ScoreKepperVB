const t1 = {
    score: 0,
    plusButton: document.querySelector('#t1PlusBtn'),
    minusButton: document.querySelector('#t1MinusBtn'),
    display: document.querySelector('#t1Display')
}

const t2 = {
    score: 0,
    plusButton: document.querySelector('#t2PlusBtn'),
    minusButton: document.querySelector('#t2MinusBtn'),
    display: document.querySelector('#t2Display')
}

const resetBtn = document.querySelector('#resetBtn')
const playToBtn = document.querySelector('#playTo')

let winningScore = 25
let isGameOver = false


function addScore(team, opponent) {
    if (isGameOver === false) {
        team.score++
        team.display.textContent = team.score
        if ((team.score === (winningScore - 1)) && (team.score === opponent.score)) {
            winningScore++
        }
        if (team.score === winningScore) {
            isGameOver = true
            team.display.classList.add('text-success')
            opponent.display.classList.add('text-danger')
            team.plusButton.disabled = true
            team.minusButton.disabled = true
            opponent.plusButton.disabled = true
            opponent.minusButton.disabled = true
        }
    }
}

t1.plusButton.addEventListener('click', () => {
    addScore(t1, t2)
})

t2.plusButton.addEventListener('click', () => {
    addScore(t2, t1)
})

function removeScore(team, opponent) {
    if ((isGameOver === false) && (team.score !== 0)) {
        if ((team.score === (winningScore - 2)) && (team.score === opponent.score)) {
            winningScore--
        }
        team.score--
        team.display.textContent = team.score
    }
}

t1.minusButton.addEventListener('click', () => {
    removeScore(t1, t2)
})

t2.minusButton.addEventListener('click', () => {
    removeScore(t2, t1)
})

function reset() {
    winningScore = parseInt(playToBtn.value)
    isGameOver = false
    t1.score = 0
    t1.display.textContent = t1.score
    t1.plusButton.disabled = false
    t1.minusButton.disabled = false
    t1.display.classList.remove('text-success', 'text-danger')
    t2.score = 0
    t2.display.textContent = t2.score
    t2.plusButton.disabled = false
    t2.minusButton.disabled = false
    t2.display.classList.remove('text-success', 'text-danger')
}

resetBtn.addEventListener('click', reset)

playToBtn.addEventListener('change', () => {
    winningScore = parseInt(this.value)
    reset()
})