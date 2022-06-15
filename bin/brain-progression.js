#!/usr/bin/env node

import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';
import getProgression from '../src/progression.js';

const brainProgression = () => {
  const userName = toMeet();

  console.log('What number is missing in the progression?');

  let usersAnswer;
  let progression;
  let index;
  let step;
  let count;
  let firstNumber;
  let tainedNumber;
  let stop = 0;

  while (stop < 3) {
    stop += 1;

    firstNumber = getRandomInt(0, 1000);
    step = getRandomInt(1, 10);
    count = getRandomInt(5, 10);
    progression = getProgression(firstNumber, step, count);
    index = getRandomInt(0, progression.length - 1);
    tainedNumber = progression[index];
    progression[index] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    usersAnswer = readlineSync.question('Your answer: ');

    if (tainedNumber !== Number(usersAnswer)) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${tainedNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }

  if (stop === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainProgression();
