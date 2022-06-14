import readlineSync from 'readline-sync';

const numbers = [15, 6, 7];

const brainEven = (numbers) => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let usersAnswer;
    let stop = 0;
    for (const num of numbers) {
        console.log(`Question: ${num}`);
        usersAnswer = readlineSync.question('Your answer: ');
        if (num % 2 === 0) {
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

brainEven(numbers);