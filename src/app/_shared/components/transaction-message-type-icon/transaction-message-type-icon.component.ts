import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';
import { StdTxMessageType } from 'decentr-js';

import { messageTypeIcons } from '@shared/svg-icons/message-type';

const MESSAGE_TYPE_ICON_MAP: Record<StdTxMessageType, string> = {
  [StdTxMessageType.CommunityCreatePost]: 'create-post',
  [StdTxMessageType.CommunityDeletePost]: 'delete-post',
  [StdTxMessageType.CommunityFollow]: 'follow',
  [StdTxMessageType.CosmosBeginRedelegate]: 'begin-redelegate',
  [StdTxMessageType.CosmosBeginUnbonding]: 'begin-unbonding',
  [StdTxMessageType.CosmosCreateValidator]: 'create-validator',
  [StdTxMessageType.CosmosEditValidator]: 'edit-validator',
  [StdTxMessageType.CosmosJail]: 'jail',
  [StdTxMessageType.CosmosDelegate]: 'delegate',
  [StdTxMessageType.CosmosSend]: 'send',
  [StdTxMessageType.CosmosUnjail]: 'unjail',
  [StdTxMessageType.CommunitySetLike]: 'set-like',
  [StdTxMessageType.CommunityUnfollow]: 'unfollow',
  [StdTxMessageType.OperationsDistributeRewards]: 'distribute-rewards',
  [StdTxMessageType.OperationsResetAccount]: 'reset-account',

  // DEPRECATED
  [StdTxMessageType.PDVDistributeRewards]: 'distribute-rewards',
  [StdTxMessageType.ProfileSetPrivate]: 'set-private',
  [StdTxMessageType.ProfileSetPublic]: 'set-public',
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

  public messageTypeIconMap: Record<StdTxMessageType, string> = MESSAGE_TYPE_ICON_MAP;

  constructor(
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register(messageTypeIcons);
  }

  public get icon(): string {
    return MESSAGE_TYPE_ICON_MAP[this.messageType] || 'transaction';
  }
}
