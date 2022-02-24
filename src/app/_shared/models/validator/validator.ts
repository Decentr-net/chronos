import { Validator } from 'decentr-js';

export interface ValidatorDefinition {
  address: Validator['operatorAddress'];
  commission: number;
  details: Validator['description']['details'];
  jailed: Validator['jailed'];
  name: Validator['description']['moniker'];
  status: Validator['status'];
  tokens: number;
  website: Validator['description']['website'];
  votingPower: number;
}
