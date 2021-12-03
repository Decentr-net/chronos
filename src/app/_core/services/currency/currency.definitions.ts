type BlockchainId = string;
type CurrencyId = string;

export type CoinRateResponse = Record<BlockchainId, Record<CurrencyId, number>>;

export interface CoinRateHistoryResponse {
  market_caps: [number, number][];
  prices: [number, number][];
  total_volume: [number, number][];
}
