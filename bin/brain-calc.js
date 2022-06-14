import readlineSync from 'readline-sync';
import toMeet from '../src/cli.js';
import getRandomInt from '../src/random-number.js';

const brainCalc = () => {
  const userName = toMeet();

  console.log('What is the result of the expression?');

  const options = ['+', '-', '*'];

  let usersAnswer;
  let firstNumber;
  let secondNumber;
  let trueResult;
  let operation;
  let stop = 0;

  while (stop < 3) {
    stop += 1;

    firstNumber = getRandomInt(1, 100);
    secondNumber = getRandomInt(1, 100);
    operation = options[getRandomInt(0, options.length - 1)];

    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    usersAnswer = readlineSync.question('Your answer: ');

    if (operation === '*') {
      trueResult = firstNumber * secondNumber;
      if (trueResult !== Number(usersAnswer)) {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
      console.log('Correct!');
    } else if (operation === '+') {
      trueResult = firstNumber + secondNumber;
      if (trueResult !== Number(usersAnswer)) {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
      console.log('Correct!');
    } else if (operation === '-') {
      trueResult = firstNumber - secondNumber;
      if (trueResult !== Number(usersAnswer)) {
        console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${trueResult}'.`);
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

brainCalc();
