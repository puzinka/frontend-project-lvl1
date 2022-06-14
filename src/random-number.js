const getRandomInt = (max, min) => {
    return parseInt(Math.random() * (max - min)) + min;
};

export default getRandomInt;