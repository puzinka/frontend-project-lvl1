#!/usr/bin/env node

import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';
import getGCD from '../src/gcd.js';

const brainGcd = () => {
  const userName = toMeet();

  console.log('Find the greatest common divisor of given numbers.');

  let usersAnswer;
  let firstNumber;
  let secondNumber;
  let trueResult;
  let stop = 0;

  while (stop < 3) {
    stop += 1;

    firstNumber = getRandomInt(1, 50);
    secondNumber = getRandomInt(1, 50);
    trueResult = getGCD(firstNumber, secondNumber);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    usersAnswer = readlineSync.question('Your answer: ');

    if (trueResult !== Number(usersAnswer)) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }

  if (stop === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainGcd();
