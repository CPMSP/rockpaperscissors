let playerScore = 0;
let compScore = 0;

let game = () => {
	function oneRound(userSelection, computerSelection) {
		userSelection = prompt(
			'Choose Your Weapon -- Rock, Paper, or Scissors?'
		).toLowerCase();

		let computerPlay = () => {
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

		computerSelection = computerPlay().toLowerCase();

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

		if ((playerScore && compScore) < 5) {
			oneRound();
		} else {
			let victor = playerScore > compScore ? 'Player' : 'Computer';
			console.log(`Winner is: ${victor} !`);
		}
	}
	oneRound();
};

game();
