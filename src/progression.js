const getProgression = (firstNumber, step, count) => {
  const mass = [];

  for (let i = firstNumber; mass.length < count; i += step) {
    mass.push(i);
  }

  return mass;
};

export default getProgression;
