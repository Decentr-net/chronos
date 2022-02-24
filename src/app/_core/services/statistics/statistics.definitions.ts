export type StatisticsValue = [number, number];

export interface RegisteredUsers {
  dayMargin: number;
  stats: StatisticsValue[];
  total: number;
}

export interface DdvChartStats {
  dayMargin: number;
  stats: StatisticsValue[];
  total: number;
}
