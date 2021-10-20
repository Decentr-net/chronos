import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';
import { StdTxMessageType } from 'decentr-js';

import { messageTypeIcons } from '@shared/svg-icons/message-type';

const DEFAULT_ICON = 'transaction';

const MESSAGE_TYPE_ICON_MAP: Record<StdTxMessageType, string> = {
  [StdTxMessageType.CommunityCreatePost]: 'create-post',
  [StdTxMessageType.CommunityDeletePost]: 'delete-post',
  [StdTxMessageType.CommunityFollow]: 'follow',
  [StdTxMessageType.CosmosBeginRedelegate]: 'begin-redelegate',
  [StdTxMessageType.CosmosBeginUnbonding]: 'begin-unbonding',
  [StdTxMessageType.CosmosCreateValidator]: 'create-validator',
  [StdTxMessageType.CosmosEditValidator]: 'edit-validator',
  [StdTxMessageType.CosmosFundCommunityPool]: DEFAULT_ICON,
  [StdTxMessageType.CosmosDelegate]: 'delegate',
  [StdTxMessageType.CosmosDeposit]: DEFAULT_ICON,
  [StdTxMessageType.CosmosJail]: 'jail',
  [StdTxMessageType.CosmosModifyWithdrawAddress]: DEFAULT_ICON,
  [StdTxMessageType.CosmosSend]: 'send',
  [StdTxMessageType.CosmosUndelegate]: 'delegate',
  [StdTxMessageType.CosmosUnjail]: 'unjail',
  [StdTxMessageType.CosmosVote]: DEFAULT_ICON,
  [StdTxMessageType.CommunitySetLike]: 'set-like',
  [StdTxMessageType.CommunityUnfollow]: 'unfollow',
  [StdTxMessageType.CosmosWithdrawDelegationReward]: DEFAULT_ICON,
  [StdTxMessageType.OperationsBanAccount]: DEFAULT_ICON,
  [StdTxMessageType.OperationsMint]: DEFAULT_ICON,
  [StdTxMessageType.OperationsDistributeRewards]: 'distribute-rewards',
  [StdTxMessageType.OperationsResetAccount]: 'reset-account',

  // DEPRECATED
  [StdTxMessageType.PDVDistributeRewards]: 'distribute-rewards',
  [StdTxMessageType.ProfileSetPrivate]: 'set-private',
  [StdTxMessageType.ProfileSetPublic]: 'set-public',

  // Undefined
  [StdTxMessageType.Undefined]: DEFAULT_ICON,
};

@Component({
  selector: 'app-transaction-message-type-icon',
  templateUrl: './transaction-message-type-icon.component.html',
  styleUrls: ['./transaction-message-type-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageTypeIconComponent {
  @Input() public messageType: StdTxMessageType;

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
