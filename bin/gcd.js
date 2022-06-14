const getGCD = (firstNumber, secondNumber) => {
    let tmp;
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
};

export default getGCD;