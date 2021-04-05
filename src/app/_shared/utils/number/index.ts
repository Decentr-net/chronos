export const getGreatestCommonDivisor = (firstNum: number, secondNum: number): number => {
  if (!secondNum) {
    return firstNum;
  }

  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};
