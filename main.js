let t1Display = document.querySelector('#t1Display')
let t2Display = document.querySelector('#t2Display')
const t1Btn = document.querySelector('#t1Btn')
const t2Btn = document.querySelector('#t2Btn')
const resetBtn = document.querySelector('#resetBtn')

let t1Score = 0
let t2Score = 0

t1Btn.addEventListener('click', () => {
    t1Score++
    t1Display.textContent = t1Score
})

t2Btn.addEventListener('click', () => {
    t2Score++
    t2Display.textContent = t2Score
})

resetBtn.addEventListener('click', () => {
    t1Score = 0
    t1Display.textContent = t1Score
    t2Score = 0
    t2Display.textContent = t2Score
})