import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ScrollbarComponent } from './scrollbar.component';

export type TypedMouseEvent<T extends EventTarget> = MouseEvent & { target: T };

function getOffsetVertical(
  { clientY }: MouseEvent,
  { top, height }: ClientRect,
): number {
  return (clientY - top) / height;
}

function getOffsetHorizontal(
  { clientX }: MouseEvent,
  { left, width }: ClientRect,
): number {
  return (clientX - left) / width;
}

@UntilDestroy()
@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective implements AfterViewInit {
  @Input()
  public draggable: 'vertical' | 'horizontal' = 'vertical';

  @Output()
  public dragged = new EventEmitter<number>();

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private readonly documentRef: Document,
    private readonly scrollbar: ScrollbarComponent,
  ) {
  }

  public ngAfterViewInit(): void {
    fromEvent<TypedMouseEvent<HTMLElement>>(
      this.elementRef.nativeElement,
      'mousedown',
    ).pipe(
      switchMap(event => {
        event.preventDefault();

        const clientRect = event.target.getBoundingClientRect();
        const offsetVertical = getOffsetVertical(event, clientRect);
        const offsetHorizontal = getOffsetHorizontal(event, clientRect);

        return fromEvent<MouseEvent>(this.documentRef, 'mousemove').pipe(
          map(event => this.getScrolled(event, offsetVertical, offsetHorizontal)),
          takeUntil(fromEvent(this.documentRef, 'mouseup')),
        );
      }),
      untilDestroyed(this),
    ).subscribe((scrolled) => {
      this.dragged.emit(scrolled);
    });
  }

  private getScrolled(
    { clientY, clientX }: MouseEvent,
    offsetVertical: number,
    offsetHorizontal: number,
  ): number {
    const { offsetHeight, offsetWidth } = this.elementRef.nativeElement;
    const { nativeElement } = this.scrollbar.elementRef;
    const { top, left, width, height } = nativeElement.getBoundingClientRect();

    const maxTop = nativeElement.scrollHeight - height;
    const maxLeft = nativeElement.scrollWidth - width;
    const scrolledTop =
      (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
    const scrolledLeft =
      (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);

    return this.draggable === 'vertical'
      ? maxTop * scrolledTop
      : maxLeft * scrolledLeft;
  }
}
