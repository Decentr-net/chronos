import { Pipe, PipeTransform } from '@angular/core';
import { StdTxMessageType } from 'decentr-js';

@Pipe({
  name: 'txMessageTypeLabel',
})
export class TxMessageTypeLabelPipe implements PipeTransform {

  public readonly messageTypeLabelMap: Record<StdTxMessageType, string> = {
    [StdTxMessageType.CommunityCreatePost]: 'Create Post',
    [StdTxMessageType.CommunityDeletePost]: 'Delete Post',
    [StdTxMessageType.CommunityFollow]: 'Msg Follow',
    [StdTxMessageType.CosmosBeginRedelegate]: 'Msg BeginRedelegate',
    [StdTxMessageType.CosmosBeginUnbonding]: 'Msg BeginUnbonding',
    [StdTxMessageType.CosmosCreateValidator]: 'Create Validator',
    [StdTxMessageType.CosmosEditValidator]: 'Edit Validator',
    [StdTxMessageType.CosmosJail]: 'Msg Jail',
    [StdTxMessageType.CosmosDelegate]: 'Msg Delegate',
    [StdTxMessageType.CosmosDeposit]: 'Msg Deposit',
    [StdTxMessageType.CosmosSend]: 'Msg Send',
    [StdTxMessageType.CosmosUndelegate]: 'Msg Undelegate',
    [StdTxMessageType.CosmosUnjail]: 'Msg Unjail',
    [StdTxMessageType.CommunitySetLike]: 'Set Like',
    [StdTxMessageType.CommunityUnfollow]: 'Msg Unfollow',
    [StdTxMessageType.OperationsBanAccount]: 'Ban Account',
    [StdTxMessageType.OperationsMint]: 'Mint',
    [StdTxMessageType.OperationsDistributeRewards]: 'Distribute Rewards',
    [StdTxMessageType.OperationsResetAccount]: 'Reset Account',

    // DEPRECATED
    [StdTxMessageType.PDVDistributeRewards]: 'Distribute Rewards',
    [StdTxMessageType.ProfileSetPrivate]: 'Set Private',
    [StdTxMessageType.ProfileSetPublic]: 'Set Public',
  };

  transform(messageType: StdTxMessageType): string {
    return this.messageTypeLabelMap[messageType] || messageType;
  }
}
