export const sortByHeight = <T extends { height: number | string }>(left: T, right: T): number => {
  return +right.height - +left.height;
};
