import { Pipe, PipeTransform } from '@angular/core';
import { TxMessageTypeUrl } from 'decentr-js';

@Pipe({
  name: 'txMessageTypeLabel',
})
export class TxMessageTypeLabelPipe implements PipeTransform {

  public readonly messageTypeLabelMap: Record<TxMessageTypeUrl, string> = {
    [TxMessageTypeUrl.CommunityCreatePost]: 'Create Post',
    [TxMessageTypeUrl.CommunityDeletePost]: 'Delete Post',
    [TxMessageTypeUrl.CommunityFollow]: 'Follow',
    [TxMessageTypeUrl.StakingBeginRedelegate]: 'Begin Redelegate',
    [TxMessageTypeUrl.StakingCreateValidator]: 'Create Validator',
    [TxMessageTypeUrl.StakingEditValidator]: 'Edit Validator',
    [TxMessageTypeUrl.DistributionFundCommunityPool]: 'Fund Community Pool',
    [TxMessageTypeUrl.StakingDelegate]: 'Delegate',
    [TxMessageTypeUrl.GovDeposit]: 'Deposit',
    [TxMessageTypeUrl.DistributionSetWithdrawAddress]: 'Set Withdraw Address',
    [TxMessageTypeUrl.BankSend]: 'Send',
    [TxMessageTypeUrl.StakingUndelegate]: 'Undelegate',
    [TxMessageTypeUrl.SlashingUnjail]: 'Unjail',
    [TxMessageTypeUrl.GovVote]: 'Vote',
    [TxMessageTypeUrl.CommunitySetLike]: 'Set Like',
    [TxMessageTypeUrl.CommunityUnfollow]: 'Unfollow',
    [TxMessageTypeUrl.DistributionWithdrawDelegatorReward]: 'Withdraw Delegation Reward',
    [TxMessageTypeUrl.DistributionWithdrawValidatorCommission]: 'Withdraw Validator Commission',
    [TxMessageTypeUrl.OperationsBurn]: 'Burn',
    [TxMessageTypeUrl.OperationsMint]: 'Mint',
    [TxMessageTypeUrl.OperationsDistributeRewards]: 'Distribute Rewards',
    [TxMessageTypeUrl.OperationsResetAccount]: 'Reset Account',
  };

  transform(messageType: TxMessageTypeUrl): string {
    return this.messageTypeLabelMap[messageType] || messageType;
  }
}
