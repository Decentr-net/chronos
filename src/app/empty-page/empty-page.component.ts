import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyPageComponent {
  public title: string;

  constructor(
    router: Router,
  ) {
    this.title = router.getCurrentNavigation().extras.state.title;
  }
}
