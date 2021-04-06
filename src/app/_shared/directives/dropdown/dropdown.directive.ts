import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input('appDropdown') public anchor: HTMLElement;
  @Input('appDropdownBackdrop') public backdrop = false;
  @Input('appDropdownBackdropClass') public backdropClass = '';

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private templateRef: TemplateRef<{}>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.show();
  }

  public ngOnDestroy(): void {
    // this.hide();
    this.overlayRef.dispose();
  }

  private show(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);

    this.syncWidth();
  }

  private hide(): void {
    this.overlayRef.detach();
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.anchor)
      .withPush(false)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
      }]);

    return new OverlayConfig({
      positionStrategy,
      hasBackdrop: this.backdrop || !!this.backdropClass,
      backdropClass: this.backdropClass || 'cdk-overlay-transparent-backdrop',
    });
  }

  private syncWidth(): void {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.anchor.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }
}
