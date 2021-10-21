import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TitleService } from '@core/services/title';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyPageComponent implements OnInit {
  public title: string;

  constructor(
    router: Router,
    private titleService: TitleService,
  ) {
    this.title = router.getCurrentNavigation()?.extras.state.title;
  }

  public ngOnInit(): void {
    this.titleService.setTitle('404');
  }
}
