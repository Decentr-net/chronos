import { Block, Transaction } from 'decentr-js';

export abstract class SearchItem<T> {
  protected constructor(public readonly result?: T) {
  }
}

export class BlockSearchItem extends SearchItem<Block> {
  constructor(block?: Block) {
    super(block);
  }
}

export class TransactionSearchItem extends SearchItem<Transaction> {
  constructor(tx?: Transaction) {
    super(tx);
  }
}

export type SearchResult = BlockSearchItem | TransactionSearchItem;
