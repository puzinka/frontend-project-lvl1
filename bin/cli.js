import readlineSync from 'readline-sync';

const toMeet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default toMeet;
