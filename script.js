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
let currentScore,activePlayer, playing, score;
const initFunction = function(){
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    score =[0,0];
    current1El.textContent = 0;
    current0El.textContent = 0;
    scoreEl1.textContent = 0;
    scoreEl0.textContent = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

};
initFunction();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer ===0 ? 1:0;
    currentScore =0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
// create initial state

// New button functionality

btnRoll.addEventListener('click', function(){

if(playing){
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
}
});

btnHold.addEventListener('click', function(){
    if(playing){
     // add the activeplayer point to the current player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    // console.log(score[activePlayer]);

// check if player wins
    if (score[activePlayer] >= 20){
        playing = false;
        diceEl.classList.add('hidden');
        console.log(`${activePlayer} Won`)

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
    }
    else{
// switch players

    switchPlayer()
    }
    }
});

btnNew.addEventListener('click', initFunction);