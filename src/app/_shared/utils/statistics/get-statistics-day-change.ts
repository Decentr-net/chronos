import { RegisteredUsersStats } from '@core/services/statistics';

export const getRegisteredUsersDayChange = (stats: RegisteredUsersStats[]): number => {
  const stat = (stats || [])
    .sort((left, right) => right[0] - left[0]);

  return (stat[0]?.[1] || 0) - (stat[1]?.[1] || 0);
};
