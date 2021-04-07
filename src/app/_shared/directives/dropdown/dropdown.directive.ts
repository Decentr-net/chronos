import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input('appDropdown') public anchor: HTMLElement;
  @Input('appDropdownBackdrop') public backdrop = false;
  @Input('appDropdownBackdropClass') public backdropClass = '';
  @Output() public appDropdownBackdropClick: EventEmitter<void> = new EventEmitter();

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private templateRef: TemplateRef<{}>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.show();

    this.overlayRef.backdropClick().pipe(
      untilDestroyed(this),
    ).subscribe(() => this.appDropdownBackdropClick.emit());
  }

  public ngOnDestroy(): void {
    this.overlayRef.dispose();
  }

  private show(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);

    this.syncWidth();
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

    const hasBackdrop = this.backdrop || !!this.backdropClass;

    return new OverlayConfig({
      positionStrategy,
      hasBackdrop,
      backdropClass: this.backdropClass || 'cdk-overlay-transparent-backdrop',
      scrollStrategy: hasBackdrop && this.overlay.scrollStrategies.block(),
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
