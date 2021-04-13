import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appStateChangeFrom]',
})
export class StateChangeFromDirective {
  @Input('appStateChangeFrom') public title: string;

  constructor(public templateRef: TemplateRef<{ $implicit: any }>) {
  }
}
