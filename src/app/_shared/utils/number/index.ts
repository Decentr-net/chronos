export const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }

  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};
