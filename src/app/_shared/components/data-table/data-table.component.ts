import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TrackByFunction,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

import { DataTableColumnDefDirective } from './data-table-column-def.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent<T> {
  @Input() public data: T[];

  @Input() public trackBy: TrackByFunction<T>;

  @Output() sortClick: EventEmitter<Sort> = new EventEmitter();

  @ContentChildren(DataTableColumnDefDirective)
  public dataTableColumnDefs: QueryList<DataTableColumnDefDirective<unknown>>;

  public get columns(): DataTableColumnDefDirective<unknown>[] {
    return this.dataTableColumnDefs.toArray();
  }

  public get columnNames(): DataTableColumnDefDirective<unknown>['name'][] {
    return this.columns.map(({ name }) => name);
  }

  public trackByColumnName: TrackByFunction<DataTableColumnDefDirective<unknown>> = ({}, { name }) => name;

  public sortChange(sort: Sort): void {
    this.sortClick.emit(sort);
  }
}
