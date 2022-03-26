import { Block, DecodedIndexedTx } from 'decentr-js';

export abstract class SearchItem<T> {
  constructor(public readonly result?: T) {
  }
}

export class BlockSearchItem extends SearchItem<Block> {
}

export class TransactionSearchItem extends SearchItem<DecodedIndexedTx> {
}

export type SearchResult = BlockSearchItem | TransactionSearchItem;
