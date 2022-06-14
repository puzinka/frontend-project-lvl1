import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';
import getPrimeNumber from '../src/prime-number.js';

const brainPrime = () => {
    const userName = toMeet();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const numbers = [1, 2, 3];

    let usersAnswer;
    let randomNumber;
    let stop = 0;

    for (const element of numbers) {
        randomNumber = getRandomInt(1, 100);

        console.log(`Question: ${randomNumber}`);
        usersAnswer = readlineSync.question('Your answer: ');

        if (getPrimeNumber(randomNumber) === true) {
            if (usersAnswer !== 'yes') {
                console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
                stop = 1;
                break;
            }
            console.log('Correct!');
        } else {
            if (usersAnswer !== 'no') {
                console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
                stop = 1;
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

brainPrime();