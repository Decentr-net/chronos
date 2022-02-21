export interface AdvDdvStatistics {
  adv: number;
  ddv: number;
}

export type RegisteredUsersStats = [number, number];

export interface RegisteredUsers {
  dayMargin: number;
  stats: RegisteredUsersStats[];
  total: number;
}
