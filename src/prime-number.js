const getPrimeNumber = (number) => {
  if (number === 1) {
    return true;
  }

  let flag = 0;

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      flag += 1;
      if (flag > 2) {
        return false;
      }
    }
  }

  return true;
};

export default getPrimeNumber;
