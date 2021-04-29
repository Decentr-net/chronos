import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';

import { TooltipComponent } from '@shared/components/tooltip/tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') text = '';

  private overlayRef: OverlayRef;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
  ) {
  }

  public ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 4,
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -4,
        },
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mousemove')
  @HostListener('mouseenter')
  public show(): void {
    if (this.overlayRef.hasAttached()) {
      return;
    }

    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('window:scroll')
  @HostListener('mouseleave')
  public hide(): void {
    this.overlayRef.detach();
  }
}
