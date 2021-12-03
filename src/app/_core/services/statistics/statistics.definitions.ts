export interface AdvDdvStatistics {
  adv: number;
  ddv: number;
}

export interface RegisteredUsersResponse {
  stats: {
    date: string;
    value: string;
  }[];
  total: number;
}

export type RegisteredUsersStats = [number, number];

export interface RegisteredUsers {
  dayMargin: number;
  stats: RegisteredUsersStats[];
  total: number;
}
