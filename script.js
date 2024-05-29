const startBtnEl = document.querySelector('.btn')
const homePageEl = document.querySelector('#home-page')
const PjoQuizPageEl = document.querySelector('#pj-char-quiz-pg')
const q1El = document.querySelector('#pj-q1')
const q2El = document.querySelector('#pj-q2')

// hide pjo quiz page
PjoQuizPageEl.style.display = "none"

// show pjo quiz page
function startBtnHandler () {
    homePageEl.style.display = "none"
    PjoQuizPageEl.style.display = "flex"
    q2El.style.display = "none"
}
startBtnEl.addEventListener('click', startBtnHandler)

// go to next question q1
function nextQsHandler (event) {
    if (event.target && event.target.matches('input[type=radio]')) {
        q1El.style.display = "none"
        q2El.style.display = "block"
    }
}
q1El.addEventListener('click', nextQsHandler)
