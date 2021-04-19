import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoint } from './breakpoint.definitions';
import { BreakpointService } from './breakpoint.service';

@UntilDestroy()
@Directive({
  selector: '[appBreakpoint]',
})
export class BreakpointDirective implements OnInit {
  @Input('appBreakpoint') public breakpoint: Breakpoint | undefined;

  @Input('appBreakpointRevert') public revert = false;

  @Input('appBreakpointElse') public set else(value: TemplateRef<{}>) {
    this.elseTemplateRef = value;
  }

  private elseTemplateRef: TemplateRef<{}>;

  constructor(
    private breakpointService: BreakpointService,
    private templateRef: TemplateRef<{}>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    if (!this.breakpoint) {
      return this.renderTemplate(this.templateRef);
    }

    this.breakpointService.observe(this.breakpoint).pipe(
      untilDestroyed(this),
    ).subscribe((matches) => {
      this.viewContainerRef.clear();

      if (matches === !this.revert) {
        return this.renderTemplate(this.templateRef);
      }

      if (this.elseTemplateRef) {
        return this.renderTemplate(this.elseTemplateRef);
      }
    });
  }

  private renderTemplate(templateRef: TemplateRef<{}>): void {
    this.viewContainerRef.createEmbeddedView(templateRef).detectChanges();
  }
}
