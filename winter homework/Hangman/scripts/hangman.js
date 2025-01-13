// Selecting elements
const wordDisplay = document.querySelector(".word-display");
//console.log(wordDisplay);
const guessesText = document.querySelector(".guesses-text");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

let currentWord, correctLetter, wrongGuessCount;
const maxGuesses = 6;

// Function to reset the game
function resetGame() {
    correctLetter = [];
    wrongGuessCount = 0;
    hangmanImage.src = "./images/hangman-0.svg";
    guessesText.innerHTML = `${wrongGuessCount} / ${maxGuesses}`;
    
    // Create empty letter slots
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
   
    // map() is a method used to create a new array by applying a specified function to each element of an existing array
    // Enable keyboard buttons
    keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false)); //keyboardDiv.querySelectorAll("button") selects all button elements inside the keyboardDiv.
    //.forEach((btn) => ...)-loops through each button element.
    //(btn.disabled = false)-sets the disabled property to false, allowing the buttons to be clickable again.
    
    
    // Hide the game modal
    gameModal.classList.remove("show");
}

// Function to get a random word
function getRandomWord() {
    // Picking random word and hint from word-list.js
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    //console.log(`Current word: ${currentWord}`);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

// Function to handle the end of the game (win or lose)
function gameOver(isVictory) {
    const modalText = isVictory ? `You found the word:` : "The correct word was:"; // is a ternary operator.
   // if isVictory is true, it assigns 'You found the word:' to modalText.
   // if isVictory is false, it assigns 'The correct word was:' to modalText.
    gameModal.querySelector("img").src = `./images/${isVictory ? "victory" : "lost"}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

// Create keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    
    // Adding a click event listener for each button
    button.addEventListener("click", (e) =>
        initGame(e.target, String.fromCharCode(i))
    ); // (e) defines an arrow function with e as the event object
    //String.fromCharCode(i) takes a number and turns it into the character that matches that number in the Unicode table.
}

// Function to handle the game logic when a letter is clicked
function initGame(button, clickedLetter) {
    //console.log(`Button clicked: ${clickedLetter}`);
   // console.log(`Current word: ${currentWord}`); 

    // Check if the clicked letter is in the currentWord
    if (currentWord.includes(clickedLetter)) {
        //console.log("Correct guess!"); // Log correct guess
        [...currentWord].forEach((letter, index) => { // currentWord is a string.
          //the spread syntax [...] splits the string into an array of its characters
            if (letter === clickedLetter) {
                correctLetter.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                //console.log(`Displaying letter: ${letter} at index: ${index}`); 
            }
        });
    } else {
       // console.log("Wrong guess!"); 
        wrongGuessCount++;
        hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
    }

    // Disable the clicked button
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Check if the game should end based on win or lose conditions
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetter.length === currentWord.length) return gameOver(true);
}

// Starting the game
getRandomWord();

// Add event listener for play again button
playAgainBtn.addEventListener("click", getRandomWord);