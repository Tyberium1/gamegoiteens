const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')
const curren0Element = document.getElementById('current--0')
const curren1Element = document.getElementById('current--1')
const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')
const player0Element = document.querySelector('player--0')
const player1Element = document.querySelector('player--1')

const swithActivePlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`)
    .textContent = currentScore
    activePlayer = currentScore === 0 ? 1:0;
    player0Element.classList.toggle('player--active')
    player1Element.classList.toggle('player--active')
}
let totalScores,currentScore,activePlayer,isPlaying;