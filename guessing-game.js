/**
Closure Exercises

Solve the following JavaScript problems using closure. Tests are provided.

Guessing Game

Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. 
Every time you create a new game, it should select a new random number, and keep it secret from the player.

Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

After a correct guess, the game ends.
 */

// const guessingGame = () =>
//     (num) => {
//         const Response = Math.floor(Math.random() * 100);
//         let gameOver = false;
//         let attempts = 0;

//         if (gameOver) return "The game is over, you already won!";
//         attempts++;
//         if (num === Response) {
//             GameOver = true;
//             const guess = attempts === 1 ? "guess" : "guesses";
//             return `You win! You found ${num} in ${attempts} ${guess}.`
//         }
//         if (num < Response) return `${num} is too low!`;
//         if (num > Response) return `${num} is too high!`;
//     }

function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (isOver) return "The game is over, you already won!";
        numGuesses++;
        if (num === ANSWER) {
            isOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numGuesses} ${guess}.`;
        }
        if (num < ANSWER) return `${num} is too low!`;
        if (num > ANSWER) return `${num} is too high!`;
    };
}



let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"

module.exports = { guessingGame };
