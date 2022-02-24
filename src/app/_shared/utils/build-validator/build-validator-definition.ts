import { Pool, Validator } from 'decentr-js';

import { ValidatorDefinition } from '@shared/models/validator/validator';

export const buildValidatorDefinition = (
  validator: Validator,
  pool: Pool,
): ValidatorDefinition => {
  return {
    address: validator.operatorAddress,
    jailed: validator.jailed,
    commission: +validator.commission.commissionRates.rate,
    details: validator.description.details,
    name: validator.description.moniker,
    status: validator.status,
    tokens: +validator.tokens,
    votingPower: +validator.tokens / +pool.bondedTokens,
    website: validator.description.website,
  };
};
