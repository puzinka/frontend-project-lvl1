import readlineSync from 'readline-sync';

const brainEven = () => {
    const userName = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let usersAnswer;
    const numbers = [1, 2, 3];
    let stop = 0;
    let randomNumber;

    const getRandomInt = (max, min) => {
        return parseInt(Math.random() * (max - min)) + min;
    };

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