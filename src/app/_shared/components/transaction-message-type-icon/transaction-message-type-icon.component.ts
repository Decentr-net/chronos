import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';
import { StdTxMessageType } from 'decentr-js';

import { messageTypeIcons } from '@shared/svg-icons/message-type';

const MESSAGE_TYPE_ICON_MAP: Record<StdTxMessageType, string> = {
  [StdTxMessageType.CommunityCreatePost]: 'create-post',
  [StdTxMessageType.CommunityDeletePost]: 'delete-post',
  [StdTxMessageType.OperationsDistributeRewards]: 'distribute-rewards',
  [StdTxMessageType.CommunityFollow]: 'follow',
  [StdTxMessageType.CosmosCreateValidator]: 'create-validator',
  [StdTxMessageType.CosmosSend]: 'send',
  [StdTxMessageType.CommunitySetLike]: 'set-like',
  [StdTxMessageType.CommunityUnfollow]: 'unfollow',
  [StdTxMessageType.OperationsResetAccount]: 'delete-post',

  // DEPRECATED
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
}
