import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appStateChangeTo]',
})
export class StateChangeToDirective {
  @Input('appStateChangeTo') public title: string;

  constructor(public templateRef: TemplateRef<{ $implicit: any }>) {
  }
}
