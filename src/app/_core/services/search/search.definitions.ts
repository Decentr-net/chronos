import { Block, DecodedIndexedTx } from 'decentr-js';

export abstract class SearchItem<T> {
  protected constructor(public readonly result?: T) {
  }
}

export class BlockSearchItem extends SearchItem<Block> {
  constructor(block?: Block) {
    super(block);
  }
}

export class TransactionSearchItem extends SearchItem<DecodedIndexedTx> {
  constructor(tx?: DecodedIndexedTx) {
    super(tx);
  }
}

export type SearchResult = BlockSearchItem | TransactionSearchItem;
