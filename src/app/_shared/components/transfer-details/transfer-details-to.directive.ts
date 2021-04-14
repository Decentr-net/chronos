import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTransferDetailsTo]',
})
export class TransferDetailsToDirective {
  @Input('appTransferDetailsTo') public title: string;

  constructor(public templateRef: TemplateRef<{ $implicit: any }>) {
  }
}
