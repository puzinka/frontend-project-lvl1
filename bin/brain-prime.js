#!/usr/bin/env node

import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';
import getPrimeNumber from '../src/prime-number.js';

const brainPrime = () => {
  const userName = toMeet();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let usersAnswer;
  let randomNumber;
  let stop = 0;

  while (stop < 3) {
    stop += 1;

    randomNumber = getRandomInt(1, 100);

    console.log(`Question: ${randomNumber}`);
    usersAnswer = readlineSync.question('Your answer: ');

    if (getPrimeNumber(randomNumber) === true) {
      if (usersAnswer !== 'yes') {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
      console.log('Correct!');
    } else {
      if (usersAnswer !== 'no') {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
      console.log('Correct!');
    }
  }

  if (stop === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainPrime();
