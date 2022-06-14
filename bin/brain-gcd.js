import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';
import getGCD from '../src/gcd.js'; 

const brainGcd = () => {
    const userName = toMeet();

    console.log('Find the greatest common divisor of given numbers.');

    const numbers = [1, 2, 3];

    let usersAnswer;
    let firstNumber;
    let secondNumber;
    let trueResult;
    let stop = 0;

    for (const element of numbers) {
        firstNumber = getRandomInt(1, 50);
        secondNumber = getRandomInt(1, 50);
        trueResult = getGCD(firstNumber, secondNumber);

        console.log(`Question: ${firstNumber} ${secondNumber}`);
        usersAnswer = readlineSync.question('Your answer: ');

        if (trueResult != usersAnswer) {
            stop = 1;
            console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
            break;
        }

        console.log('Correct!');
    }

    if (stop === 0) {
        console.log(`Congratulations, ${userName}!`);
        return;
    }

    console.log(`Let's try again, ${userName}!`);
};

brainGcd();
