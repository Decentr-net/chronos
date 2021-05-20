import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarComponent {

  constructor(
    @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
  ) {
  }

  get verticalScrolled(): number {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
    } = this.elementRef.nativeElement;

    return scrollTop / (scrollHeight - clientHeight);
  }

  get horizontalScrolled(): number {
    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = this.elementRef.nativeElement;

    return scrollLeft / (scrollWidth - clientWidth);
  }

  get verticalPosition(): number {
    return this.verticalScrolled * (100 - this.verticalSize);
  }

  get horizontalPosition(): number {
    return this.horizontalScrolled * (100 - this.horizontalSize);
  }

  get verticalSize(): number {
    const { clientHeight, scrollHeight } = this.elementRef.nativeElement;

    return Math.ceil((clientHeight / scrollHeight) * 100);
  }

  get horizontalSize(): number {
    const { clientWidth, scrollWidth } = this.elementRef.nativeElement;

    return Math.ceil((clientWidth / scrollWidth) * 100);
  }

  get hasVerticalBar(): boolean {
    return this.verticalSize < 100;
  }

  get hasHorizontalBar(): boolean {
    return this.horizontalSize < 100;
  }

  @HostListener("scroll")
  public onScroll(): void {
    // just to trigger change detection
  }

  public onVertical(scrollTop: number): void {
    this.elementRef.nativeElement.scrollTop = scrollTop;
  }

  public onHorizontal(scrollLeft: number): void {
    this.elementRef.nativeElement.scrollLeft = scrollLeft;
  }
}
