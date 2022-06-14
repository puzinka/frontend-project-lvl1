import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from './random-number.js'; 
import getProgression from './progression.js';

const brainProgression = () => {
    const userName = toMeet();

    console.log('What number is missing in the progression?');

    const numbers = [1, 2, 3];

    let usersAnswer;
    let progression;
    let index;
    let step;
    let count;
    let firstNumber;
    let tainedNumber;
    let stop = 0;

    for (const element of numbers) {
        firstNumber = getRandomInt(0,1000);
        step = getRandomInt(1, 10);
        count = getRandomInt(5, 10);
        progression = getProgression(firstNumber, step, count);
        index = getRandomInt(0, progression.length - 1)
        tainedNumber = progression[index];
        progression[index] = '..';

        console.log(`Question: ${progression}`);
        usersAnswer = readlineSync.question('Your answer: ');

        if (usersAnswer != tainedNumber) {
            stop = 1;
            console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${tainedNumber}'.`);
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

brainProgression();