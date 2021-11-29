import { RegisteredUsersStats } from '@core/services/statistics';

export const getRegisteredUsersDayChange = (stats: RegisteredUsersStats[], currentValue: number): number => {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  const previousValue = (stats || [])
    .sort((left, right) => right[0] - left[0])
    .find((stat) => stat[0] !== today)[1];

  return currentValue - previousValue;
};
