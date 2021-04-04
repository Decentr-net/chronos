import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

type Breakpoint = 'desktop-xlarge' | 'desktop-large' | 'desktop' | 'tablet' | 'mobile';

@UntilDestroy()
@Directive({
  selector: '[appBreakpoint]'
})
export class BreakpointDirective implements OnInit {
  @Input('appBreakpoint') public breakpoint: Breakpoint;
  @Input('appBreakpointRevert') public revert = false;

  private breakpointMap: Map<Breakpoint, string>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private templateRef: TemplateRef<{}>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.breakpointMap = this.createBreakpointMap();

    this.breakpointObserver.observe(this.breakpointMap.get(this.breakpoint)).pipe(
      pluck('matches'),
      untilDestroyed(this),
    ).subscribe((matches) => {
      this.viewContainerRef.clear();

      if (matches === !this.revert) {
        this.viewContainerRef.createEmbeddedView(this.templateRef).detectChanges();
      }
    });
  }

  private createBreakpointMap(): Map<Breakpoint, string> {
    return ['desktop-xlarge', 'desktop-large', 'desktop', 'tablet', 'mobile']
      .reduce((map, breakpoint: Breakpoint) => map.set(breakpoint, this.getBreakpoint(breakpoint)), new Map());
  }

  private getBreakpoint(breakpoint: Breakpoint): string {
    const width = getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${breakpoint}`);

    return `(max-width: ${width})`;
  }
}
