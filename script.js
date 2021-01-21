let compScore = 0;
let playerScore = 0;
let roundNum = 0;

let userSelection;
let computerSelection;

const userButtons = document.querySelectorAll('.userPlay');

const textContainer = document.querySelector('.textContainer');

const round = document.createElement('p');
const actions = document.createElement('p');
const text = document.createElement('p');
const score = document.createElement('p');
const winner = document.createElement('p');

const computerPlay = () => {
	let shoot = Math.random();
	if (shoot >= 0 && shoot <= 0.334) {
		return 'rock';
	}
	if (shoot > 0.334 && shoot <= 0.667) {
		return 'paper';
	}
	if (shoot > 0.667 && shoot <= 0.999) {
		return 'scissors';
	}
};

userButtons.forEach((button) => {
	button.addEventListener('click', () => {
		user = button.id;
		// console.log(`User: ${user}`);
		computer = computerPlay();
		// console.log(`Comp: ${computer}`);
		oneRound(user, computer);
	});
});

const oneRound = (userSelection, computerSelection) => {
	actions.textContent = `Player: ${userSelection}; Computer: ${computerSelection}`;
	textContainer.appendChild(actions);
	if (userSelection === 'rock' && computerSelection === 'scissors') {
		// console.log('You Win!  Rock smashes Scissors!');
		text.textContent = 'You Win!  Rock smashes Scissors!';
		textContainer.appendChild(text);
		playerScore++;
	}
	if (userSelection === 'rock' && computerSelection === 'paper') {
		// console.log('You Lose!  Paper covers Rock!');
		text.textContent = 'You Lose!  Paper covers Rock!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'rock') {
		// console.log('You Win!  Paper covers Rock!');
		text.textContent = 'You Win!  Paper covers Rock!';
		textContainer.appendChild(text);
		playerScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'scissors') {
		// console.log('You Lose!  Scissors cuts Paper!');
		text.textContent = 'You Lose!  Scissors cuts Paper!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'rock') {
		// console.log('You Lose!  Rock smashes Scissors!');
		text.textContent = 'You Lose!  Rock smashes Scissors!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'paper') {
		// console.log('You Win!  Scissors cuts Paper!');
		text.textContent = 'You Win!  Scissors cuts Paper!';
		textContainer.appendChild(text);
		playerScore++;
	}
	else if (userSelection === computerSelection) {
		// console.log('Tie Round!  Shoot Again!');
		text.textContent = 'Tie Round!  Shoot Again!';
		textContainer.appendChild(text);
	}
	// console.log(`Player: ${playerScore}; Computer: ${compScore}`);
	score.textContent = `Player: ${playerScore}; Computer: ${compScore}`;
	textContainer.appendChild(score);
	roundNum++;
	round.textContent = `Round # ${roundNum}`;
	textContainer.appendChild(round);
	if (playerScore === 5 || compScore === 5) {
		endGame(playerScore, compScore);
	}
	else {
		return;
	}
};

const endGame = (playerScore, compScore) => {
	let victor;
	playerScore > compScore ? (victor = 'Player') : (victor = 'Computer');
	// if (playerScore > compScore) {
	// 	victor = 'Player';
	// }
	// else if (compScore > playerScore) {
	// 	victor = 'Computer';
	// }
	// else {
	// 	victor = 'Tie Game';
	// }
	// console.log(`Winner is: ${victor} !`);
	winner.textContent = `Winner is: ${victor}!`;
	textContainer.appendChild(winner);
	playerScore = 0;
	compScore = 0;
	roundNum = 0;
	victor = '';
	// score.textContent = '';
};

// const isWinner = (playerScore, compScore) => {
// 		(playerScore === 5 || compScore === 5) ?
// 	}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
	playerScore = 0;
	compScore = 0;
	roundNum = 0;
	// console.log('Game is reset');
	text.textContent = 'Game Has Been Reset';
	score.textContent = '';
	winner.textContent = '';
	actions.textContent = '';
	round.textContent = '';
	victor = '';
});
