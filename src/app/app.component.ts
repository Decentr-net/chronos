import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import packageSettings from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('attr.version') public appVersion: string = packageSettings.version;
}
