import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTransferDetailsFrom]',
})
export class TransferDetailsFromDirective {
  @Input('appTransferDetailsFrom') public title: string;

  constructor(public templateRef: TemplateRef<{ $implicit: any }>) {
  }
}
