import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Breakpoint } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  public breakpoint: typeof Breakpoint = Breakpoint;
}
