
let word = "Yo";
let winner = false;

const correctGuess = (message) => {
    const correctGuess = message == word && !winner;
    if(correctGuess)
        winner = true;
    return correctGuess;     
}


module.exports = {
    correctGuess
}