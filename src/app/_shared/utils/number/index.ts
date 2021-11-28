export const getGreatestCommonDivisor = (firstNum: number, secondNum: number): number => {
  if (!secondNum) {
    return firstNum;
  }

  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};

export const calculateDifferencePercentage = (newNumber: number, oldNumber: number): number => {
  return oldNumber ? (newNumber - oldNumber) / Math.abs(oldNumber) * 100 : 0;
};
