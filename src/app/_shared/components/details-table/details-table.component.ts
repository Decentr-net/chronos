import { ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { DetailsTableCellDefDirective } from './details-table-cell-def.directive';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsTableComponent implements OnInit {
  @ContentChildren(DetailsTableCellDefDirective)
  public cells: QueryList<DetailsTableCellDefDirective>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
