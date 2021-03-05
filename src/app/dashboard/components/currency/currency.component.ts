import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiContextWithImplicit, TuiStringHandler } from '@taiga-ui/cdk';
import { TuiPoint } from '@taiga-ui/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CurrencyComponent {
  readonly hint: TuiStringHandler<TuiContextWithImplicit<TuiPoint>> = ({ $implicit }) =>
    `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;

  @Input() stats = [];

  constructor() {
  }
}
