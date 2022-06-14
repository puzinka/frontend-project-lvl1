const getGCD = (a, b) => {
  let tmp;
  let firstNumber = a;
  let secondNumber = b;

  if (firstNumber > secondNumber) {
    tmp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = tmp;
  }

  for (let i = firstNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0) {
      if (secondNumber % i === 0) {
        return i;
      }
    }
  }
  return 1;
};

export default getGCD;
