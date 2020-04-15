var randomGeneratedNumbers = []; 
populateArrayRandomly(0, 100, randomGeneratedNumbers, 5);
alert('Memorize these numbers: ' + randomGeneratedNumbers );
var userNumberCollection = [];
var victoryNumbers = [];

setInterval(askForNumbers, 1000);

alert('You have correctly guessed ' + victoryNumbers.length + ' numbers. They are ' + victoryNumbers )

function checkerVictory(iaArray, userArray){
    for (var i = 0; i < iaArray.length; i++) {
        if (iaArray[i] == userArray[i]){
            victoryNumbers.push(userArray[i]);
        }
    }
};

function askForNumbers(){
    for (var attempt = 0; attempt < 5; attempt++){
        var userNumber = sanitizeNumericalInput('You can still type ' + attempt + ' times.');
        userNumberCollection.push(userNumber);
    }
};

function populateArrayRandomly(min,max,arrayToPopulate,population) {
    var randomNumber;
    do {
        randomNumber = randomGenie(min,max);
        if (!arrayToPopulate.includes(randomNumber)) {
            arrayToPopulate.push(randomNumber);
        }
        } while (arrayToPopulate.length < population);
};


function randomGenie(min, max){
    var randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    return randomNumber;
};

function sanitizeNumericalInput(question) {
    do {
        usersInputRaw = parseInt(prompt(question).trim());
    } while (usersInputRaw == null || isNaN(usersInputRaw));
    return usersInputRaw;
};