var randomGeneratedNumbers = []; 
populateArrayRandomly(0, 100, randomGeneratedNumbers, 5);
alert('Memorize these numbers: ' + randomGeneratedNumbers );
var userNumberCollection = [];
var victoryNumbers = [];
var attemptMax = 5;

setTimeout(playTheGame, 30000);

//Ask for attemptMax n numbers, check for victory conditions (checkerVictory) and print an output
function playTheGame(){
    askForNumbers(5)
    checkerVictory(randomGeneratedNumbers,userNumberCollection);
    if (victoryNumbers.length > 0){
        alert('You have correctly guessed ' + victoryNumbers.length + ' numbers. They are ' + victoryNumbers );
    }
    else{
        alert('Not even a correct guess, you have the memory of an hamster!');
    }
};

//Check if the user guessed number are in automatically populated array, if yes populate a new array with the results
function checkerVictory(iaArray, userArray){
    for (var i = 0; i < iaArray.length; i++) {
        if (iaArray[i] == userArray[i]){
            victoryNumbers.push(userArray[i]);
        }
    }
};

//Ask for a n max attempts
function askForNumbers(maxAttempts){
    for (var attempt = 0; attempt < maxAttempts; attempt++){
        var userNumber = sanitizeNumericalInput('You can still type ' + (maxAttempts-attempt) + ' times.');
        userNumberCollection.push(userNumber);
    }
};

//Populate an arrayToPopulate of a population of unique randomly generated numbers in a min/max range
function populateArrayRandomly(min,max,arrayToPopulate,population) {
    var randomNumber;
    do {
        randomNumber = randomGenie(min,max);
        if (!arrayToPopulate.includes(randomNumber)) {
            arrayToPopulate.push(randomNumber);
        }
        } while (arrayToPopulate.length < population);
};

//Generate random numbers in a min/max (inclusive) range
function randomGenie(min, max){
    var randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    return randomNumber;
};

//Force a user to input a numerical value
function sanitizeNumericalInput(question) {
    do {
        usersInputRaw = parseInt(prompt(question).trim());
    } while (usersInputRaw == null || isNaN(usersInputRaw));
    return usersInputRaw;
};