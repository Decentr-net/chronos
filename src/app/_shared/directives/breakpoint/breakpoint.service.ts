import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Breakpoint } from './breakpoint.definitions';

@Injectable()
export class BreakpointService {
  private breakpointMap: Map<Breakpoint, string>;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointMap = this.createBreakpointMap();
  }

  public observe(breakpoint: Breakpoint): Observable<boolean> {
    return this.breakpointObserver.observe(this.breakpointMap.get(breakpoint)).pipe(
      pluck('matches'),
    );
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
