import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDataTableColumnDef]',
})
export class DataTableColumnDefDirective<T> {
  @Input('appDataTableColumnDefId') public id: string;

  @Input('appDataTableColumnDefName') public name: string;

  constructor(public templateRef: TemplateRef<T>) {
  }
}
