import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from './random-number.js';

const brainEven = () => {
    const userName = toMeet();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let usersAnswer;
    const numbers = [1, 2, 3];
    let stop = 0;
    let randomNumber;

    for (const num of numbers) {
        randomNumber = getRandomInt(1, 100);
        console.log(`Question: ${randomNumber}`);
        usersAnswer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 === 0) {
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
}

brainEven();

export default getRandomInt;