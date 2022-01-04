import { BondStatus } from 'decentr-js';

export const VALIDATOR_STATUS_MAP: Record<BondStatus, string> = {
  [BondStatus.BOND_STATUS_BONDED]: 'Bonded',
  [BondStatus.BOND_STATUS_UNBONDED]: 'Unbonded',
  [BondStatus.BOND_STATUS_UNBONDING]: 'Unbonding',
  [BondStatus.BOND_STATUS_UNSPECIFIED]: 'Bonded',
  [BondStatus.UNRECOGNIZED]: 'Bonded',
};
