'use strict';

// select elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer ===0 ? 1:0;
    currentScore =0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
// create initial state
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');
let score =[0,0]
// New button functionality

btnRoll.addEventListener('click', function(){
// 1. roll a random dice
const dice = Math.trunc(Math.random()*6)+1;
// console.log(dice);
// 2. Display the dice
diceEl.src =`dice-${dice}.png`;
diceEl.classList.remove('hidden');

/* check if it is a 1. if true, switch to the next player.
if not added to the current points
*/
if (dice !==1){
    // add score to current score and display
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    

}
else{
    // switch players
    switchPlayer();


}

});

btnHold.addEventListener('click', function(){
    // add the activeplayer point to the current player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

// check if player work
if (score[activePlayer] >= 20){
    document.querySelector(`player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
}



    // switch players
    switchPlayer()




});