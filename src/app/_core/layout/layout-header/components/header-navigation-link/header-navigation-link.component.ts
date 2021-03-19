import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-navigation-link',
  templateUrl: './header-navigation-link.component.html',
  styleUrls: ['./header-navigation-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationLinkComponent {
  @Input() public link: string;
  @Input() public title: string;
}
