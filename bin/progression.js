const getProgression = (firstNumber, step, count) => {
    let mass = [];

    for (let i = firstNumber; mass.length < count; i += step) {
        mass.push(i);
    }

    return mass;
};

export default getProgression;