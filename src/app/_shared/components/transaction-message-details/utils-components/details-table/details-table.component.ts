import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';

import { DetailsTableCellDefDirective } from './details-table-cell-def.directive';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsTableComponent {
  @ContentChildren(DetailsTableCellDefDirective)
  public cells: QueryList<DetailsTableCellDefDirective>;
}
