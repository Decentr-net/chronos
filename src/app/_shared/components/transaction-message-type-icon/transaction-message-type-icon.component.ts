import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';
import { TxMessageTypeUrl } from 'decentr-js';

import { messageTypeIcons } from '@shared/svg-icons/message-type';

const DEFAULT_ICON = 'transaction';

const MESSAGE_TYPE_ICON_MAP: Record<TxMessageTypeUrl, string> = {
  [TxMessageTypeUrl.CommunityCreatePost]: 'create-post',
  [TxMessageTypeUrl.CommunityDeletePost]: 'delete-post',
  [TxMessageTypeUrl.CommunityFollow]: 'follow',
  [TxMessageTypeUrl.StakingBeginRedelegate]: 'begin-redelegate',
  [TxMessageTypeUrl.StakingCreateValidator]: 'create-validator',
  [TxMessageTypeUrl.StakingEditValidator]: 'edit-validator',
  [TxMessageTypeUrl.DistributionFundCommunityPool]: DEFAULT_ICON,
  [TxMessageTypeUrl.StakingDelegate]: 'delegate',
  [TxMessageTypeUrl.GovDeposit]: DEFAULT_ICON,
  [TxMessageTypeUrl.DistributionSetWithdrawAddress]: DEFAULT_ICON,
  [TxMessageTypeUrl.BankSend]: 'send',
  [TxMessageTypeUrl.StakingUndelegate]: 'delegate',
  [TxMessageTypeUrl.SlashingUnjail]: 'unjail',
  [TxMessageTypeUrl.GovVote]: DEFAULT_ICON,
  [TxMessageTypeUrl.CommunitySetLike]: 'set-like',
  [TxMessageTypeUrl.CommunityUnfollow]: 'unfollow',
  [TxMessageTypeUrl.DistributionWithdrawDelegatorReward]: DEFAULT_ICON,
  [TxMessageTypeUrl.DistributionWithdrawValidatorCommission]: DEFAULT_ICON,
  [TxMessageTypeUrl.OperationsBurn]: DEFAULT_ICON,
  [TxMessageTypeUrl.OperationsMint]: DEFAULT_ICON,
  [TxMessageTypeUrl.OperationsDistributeRewards]: 'distribute-rewards',
  [TxMessageTypeUrl.OperationsResetAccount]: 'reset-account',
};

@Component({
  selector: 'app-transaction-message-type-icon',
  templateUrl: './transaction-message-type-icon.component.html',
  styleUrls: ['./transaction-message-type-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageTypeIconComponent {
  @Input() public messageType: TxMessageTypeUrl;

  @Input() public size: keyof SVG_CONFIG['sizes'] = 'lg';

  constructor(
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register(messageTypeIcons);
  }

  public get icon(): string {
    return MESSAGE_TYPE_ICON_MAP[this.messageType] || DEFAULT_ICON;
  }
}
