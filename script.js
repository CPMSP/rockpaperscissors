let compScore = 0;
let playerScore = 0;
let userSelection;
let computerSelection;

const userButtons = document.querySelectorAll('.userPlay');

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
		console.log(`User: ${user}`);
		computer = computerPlay();
		console.log(`Comp: ${computer}`);
		oneRound(user, computer);
	});
});

const oneRound = (userSelection, computerSelection) => {
	if (userSelection === 'rock' && computerSelection === 'scissors') {
		console.log('You Win!  Rock smashes Scissors!');
		playerScore++;
	}
	if (userSelection === 'rock' && computerSelection === 'paper') {
		console.log('You Lose!  Paper covers Rock!');
		compScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'rock') {
		console.log('You Win!  Paper covers Rock!');
		playerScore++;
	}
	if (userSelection === 'paper' && computerSelection === 'scissors') {
		console.log('You Lose!  Scissors cuts Paper!');
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'rock') {
		console.log('You Lose!  Rock smashes Scissors!');
		compScore++;
	}
	if (userSelection === 'scissors' && computerSelection === 'paper') {
		console.log('You Win!  Scissors cuts Paper!');
		playerScore++;
	} else if (userSelection === computerSelection) {
		console.log('Tie Round!  Shoot Again!');
	}
	console.log(`Player: ${playerScore}; Computer: ${compScore}`);
	if ((playerScore || compScore) === 5) {
		let victor;
		if (playerScore > compScore) {
			victor = 'Player';
		} else if (compScore > playerScore) {
			victor = 'Computer';
		} else {
			victor = 'Tie Game';
		}
		console.log(`Winner is: ${victor} !`);
		playerScore = 0;
		compScore = 0;
	}
};

const reset = document.querySelector('#start');
start.addEventListener('click', () => {
	playerScore = 0;
	compScore = 0;
	console.log('Game is reset');
});
