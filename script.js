
const yourMoveLabel = document.getElementById('your-move');
const computerMoveLabel = document.getElementById('computer-move');
const resultLabel = document.getElementById('result');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerMove = e.target.id;
        console.log(e.target);
        const computerMove = getComputerMove();
        const result = getResult(playerMove, computerMove);
        console.log({ playerMove, computerMove, result });
        yourMoveLabel.textContent = playerMove;
        computerMoveLabel.textContent = computerMove;
        resultLabel.textContent = result;
    });
});


function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}


function getResult(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "It's a draw!";
    }

    if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            return "Computer won! Try again.";
        } else {
            return "You won! Congratulations! one more round?";
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            return "Computer won! Try again.";
        } else {
            return "You won! Congratulations! one more round?";
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            return "Computer won! Try again.";
        } else {
            return "You won! Congratulations! one more round?";
        }
    }
}