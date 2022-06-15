#!/usr/bin/env node

import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';

const brainEven = () => {
  const userName = toMeet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let usersAnswer;
  let stop = 0;
  let randomNumber;

  while (stop < 3) {
    stop += 1;

    randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);
    usersAnswer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
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

brainEven();
