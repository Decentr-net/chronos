import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessage, StdTxMessageType } from 'decentr-js';

@Component({
  selector: 'app-transaction-message',
  templateUrl: './transaction-message.component.html',
  styleUrls: ['./transaction-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageComponent {
  @Input() txMessage: StdTxMessage<any>;

  public readonly messageTypeLabelMap: Record<StdTxMessageType, string> = {
    [StdTxMessageType.CommunityCreatePost]: 'Create Post',
    [StdTxMessageType.CommunityDeletePost]: 'Delete Post',
    [StdTxMessageType.PdvDistributeRewards]: 'Distribute Rewards',
    [StdTxMessageType.CommunityFollow]: 'Msg Follow',
    [StdTxMessageType.CosmosCreateValidator]: 'Create validator',
    [StdTxMessageType.CosmosSend]: 'Msg Send',
    [StdTxMessageType.CommunitySetLike]: 'Set Like',
    [StdTxMessageType.ProfileSetPrivate]: 'Set Private',
    [StdTxMessageType.ProfileSetPublic]: 'Set Public',
    [StdTxMessageType.CommunityUnfollow]: 'Msg Unfollow',
  };
}
