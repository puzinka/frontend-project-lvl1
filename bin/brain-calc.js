import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';

const brainCalc = () => {
    const userName = toMeet();

    console.log('What is the result of the expression?');

    const options = ['+', '-', '*'];
    const numbers = [1, 2, 3];

    let usersAnswer;
    let firstNumber;
    let secondNumber;
    let trueResult;
    let operation;
    let stop = 0;

    for (const element of numbers) {
        firstNumber = getRandomInt(1, 100);
        secondNumber = getRandomInt(1, 100);
        operation = options[getRandomInt(0, options.length - 1)];

        console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
        usersAnswer = readlineSync.question('Your answer: ');

        if (operation === '*') {
            trueResult = firstNumber * secondNumber;
            if (trueResult != usersAnswer) {
                stop = 1;
                console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
                break;
            }
            console.log('Correct!');
        } else if (operation === '+') {
            trueResult = firstNumber + secondNumber;
            if (trueResult != usersAnswer) {
                stop = 1;
                console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
                break;
            }
                console.log('Correct!');
        } else if (operation === '-') {
            trueResult = firstNumber - secondNumber;
            if (trueResult != usersAnswer) {
                stop = 1;
                console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
                break;
            }
            console.log('Correct!');
        }

    }

    if (stop === 0) {
        console.log(`Congratulations, ${userName}!`);
        return;
    }

    console.log(`Let's try again, ${userName}!`);
};

brainCalc();
