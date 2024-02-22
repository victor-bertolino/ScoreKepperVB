let t1Display = document.querySelector('#t1Display')
let t2Display = document.querySelector('#t2Display')
const t1Btn = document.querySelector('#t1Btn')
const t2Btn = document.querySelector('#t2Btn')
const resetBtn = document.querySelector('#resetBtn')
const playToBtn = document.querySelector('#playTo')

let t1Score = 0
let t2Score = 0
let winningScore = 25
let isGameOver = false

playToBtn.addEventListener('change', () => {
    winningScore = parseInt(playToBtn.value)
    reset()
})

t1Btn.addEventListener('click', () => {
    if (isGameOver === false) {
        t1Score++
        t1Display.textContent = t1Score
        if ((t1Score === (winningScore - 1)) && (t2Score === (winningScore - 1))) {
            winningScore++
        }
        if (t1Score === winningScore) {
            isGameOver = true
        }
    }
})

t2Btn.addEventListener('click', () => {
    if (isGameOver === false) {
        t2Score++
        t2Display.textContent = t2Score
        if ((t1Score === (winningScore - 1)) && (t2Score === (winningScore - 1))) {
            winningScore++
        }
        if (t2Score === winningScore) {
            isGameOver = true
        }
    }
})

function reset() {
    winningScore = parseInt(playToBtn.value)
    isGameOver = false
    t1Score = 0
    t1Display.textContent = t1Score
    t2Score = 0
    t2Display.textContent = t2Score
}

resetBtn.addEventListener('click', () => {
    reset()
})
