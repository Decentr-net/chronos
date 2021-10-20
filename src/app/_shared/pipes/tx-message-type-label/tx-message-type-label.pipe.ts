import { Pipe, PipeTransform } from '@angular/core';
import { StdTxMessageType } from 'decentr-js';

@Pipe({
  name: 'txMessageTypeLabel',
})
export class TxMessageTypeLabelPipe implements PipeTransform {

  public readonly messageTypeLabelMap: Record<StdTxMessageType, string> = {
    [StdTxMessageType.CommunityCreatePost]: 'Create Post',
    [StdTxMessageType.CommunityDeletePost]: 'Delete Post',
    [StdTxMessageType.CommunityFollow]: 'Follow',
    [StdTxMessageType.CosmosBeginRedelegate]: 'Begin Redelegate',
    [StdTxMessageType.CosmosBeginUnbonding]: 'Begin Unbonding',
    [StdTxMessageType.CosmosCreateValidator]: 'Create Validator',
    [StdTxMessageType.CosmosEditValidator]: 'Edit Validator',
    [StdTxMessageType.CosmosFundCommunityPool]: 'Fund Community Pool',
    [StdTxMessageType.CosmosDelegate]: 'Delegate',
    [StdTxMessageType.CosmosDeposit]: 'Deposit',
    [StdTxMessageType.CosmosJail]: 'Jail',
    [StdTxMessageType.CosmosModifyWithdrawAddress]: 'Modify Withdraw Address',
    [StdTxMessageType.CosmosSend]: 'Send',
    [StdTxMessageType.CosmosUndelegate]: 'Undelegate',
    [StdTxMessageType.CosmosUnjail]: 'Unjail',
    [StdTxMessageType.CosmosVote]: 'Vote',
    [StdTxMessageType.CommunitySetLike]: 'Set Like',
    [StdTxMessageType.CommunityUnfollow]: 'Unfollow',
    [StdTxMessageType.CosmosWithdrawDelegationReward]: 'Withdraw Delegation Reward',
    [StdTxMessageType.OperationsBanAccount]: 'Ban Account',
    [StdTxMessageType.OperationsMint]: 'Mint',
    [StdTxMessageType.OperationsDistributeRewards]: 'Distribute Rewards',
    [StdTxMessageType.OperationsResetAccount]: 'Reset Account',

    // DEPRECATED
    [StdTxMessageType.PDVDistributeRewards]: 'Distribute Rewards',
    [StdTxMessageType.ProfileSetPrivate]: 'Set Private',
    [StdTxMessageType.ProfileSetPublic]: 'Set Public',

    // Undefined
    [StdTxMessageType.Undefined]: '',
  };

  transform(messageType: StdTxMessageType): string {
    return this.messageTypeLabelMap[messageType] || messageType;
  }
}
