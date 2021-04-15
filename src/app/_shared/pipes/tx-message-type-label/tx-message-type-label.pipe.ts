import { Pipe, PipeTransform } from '@angular/core';
import { StdTxMessageType } from 'decentr-js';

@Pipe({
  name: 'txMessageTypeLabel',
})
export class TxMessageTypeLabelPipe implements PipeTransform {

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

  transform(messageType: StdTxMessageType): string {
    return this.messageTypeLabelMap[messageType];
  }
}
