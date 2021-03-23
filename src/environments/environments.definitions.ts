export abstract class Environment {
  abstract chainId: string;
  abstract currencyApi: string;
  abstract decentrApi: string;
  abstract production: boolean;
  abstract theseusUrl: string;
}
