let compScore = 0;
let playerScore = 0;
let roundNum = 0;

let userSelection;
let computerSelection;

const userButtons = document.querySelectorAll('.userPlay');
const textContainer = document.querySelector('.textContainer');
const inputContainer = document.querySelector('.inputs');

const round = document.createElement('p');
const actions = document.createElement('p');
const text = document.createElement('h4');
const score = document.createElement('p');
const winner = document.createElement('h3');

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
		computer = computerPlay();
		oneRound(user, computer);
	});
});

const oneRound = (userSelection, computerSelection) => {
	actions.textContent = `Player: ${userSelection.toUpperCase()}; Computer: ${computerSelection.toUpperCase()}`;
	textContainer.appendChild(actions);
	if (userSelection === 'rock' && computerSelection === 'scissors') {
		text.textContent = 'You Win!  Rock smashes Scissors!';
		textContainer.appendChild(text);
		playerScore++;
	}
	if (userSelection === 'rock' && computerSelection === 'paper') {
		text.textContent = 'You Lose!  Paper covers Rock!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'rock') {
		text.textContent = 'You Win!  Paper covers Rock!';
		textContainer.appendChild(text);
		playerScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'scissors') {
		text.textContent = 'You Lose!  Scissors cuts Paper!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'rock') {
		text.textContent = 'You Lose!  Rock smashes Scissors!';
		textContainer.appendChild(text);
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'paper') {
		text.textContent = 'You Win!  Scissors cuts Paper!';
		textContainer.appendChild(text);
		playerScore++;
	}
	else if (userSelection === computerSelection) {
		text.textContent = 'Tie Round!  Shoot Again!';
		textContainer.appendChild(text);
	}
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
	winner.textContent = `Winner is: ${victor}!`;
	textContainer.appendChild(winner);
	reset.style.visibility = 'visible';
	inputContainer.style.visibility = 'hidden';
	playerScore = 0;
	compScore = 0;
	roundNum = 0;
	victor = '';
};

const reset = document.querySelector('#reset');
reset.style.visibility = 'hidden';
reset.addEventListener('click', () => {
	playerScore = 0;
	compScore = 0;
	roundNum = 0;
	text.textContent = 'Game Has Been Reset';
	score.textContent = '';
	winner.textContent = '';
	actions.textContent = '';
	round.textContent = '';
	victor = '';
	inputContainer.style.visibility = 'visible';
	reset.style.visibility = 'hidden';
});
