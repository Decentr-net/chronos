import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@UntilDestroy()
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent implements OnInit {
  @Input() public contentDivider = false;

  @Input() public removeBorderBreakpoint: Breakpoint;

  constructor(
    private breakpointObserver: BreakpointService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  public ngOnInit(): void {
    const borderModClass = 'mod-bordered';
    this.renderer.addClass(this.elementRef.nativeElement, borderModClass);

    if (this.removeBorderBreakpoint) {
      this.breakpointObserver.observe(this.removeBorderBreakpoint).pipe(
        untilDestroyed(this),
      ).subscribe((matches) => {
        matches
          ? this.renderer.removeClass(this.elementRef.nativeElement, borderModClass)
          : this.renderer.addClass(this.elementRef.nativeElement, borderModClass);
      });
    }
  }
}
