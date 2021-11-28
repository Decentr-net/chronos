import { calculateDifferencePercentage } from '../number';
import { RegisteredUsersStats } from '@core/services/statistics';

export const getRegisteredUsersDayChange = (stats: RegisteredUsersStats[], currentValue: number): number => {
  const previousValue = (stats || [])
    .sort((left, right) => right[0] - left[0]);

  return calculateDifferencePercentage(currentValue, +previousValue[0][1]);
};
