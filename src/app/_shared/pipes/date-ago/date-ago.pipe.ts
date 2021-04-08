import { ChangeDetectorRef, NgZone, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

@Pipe({
  name: 'dateAgo',
  pure: false,
})
export class DateAgoPipe implements PipeTransform, OnDestroy {
  private ngZone$: Subscription = Subscription.EMPTY;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {
  }

  transform(value: string | number): string {
    const date = new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - date.getTime()) / 1000));
    const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;

    const minutes = Math.floor(Math.abs(seconds / 60));
    const hours = Math.floor(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));

    this.removeTimer();
    this.ngZone$ = this.ngZone.runOutsideAngular(() => this.ngZone$ = timer(timeToUpdate)
      .pipe(
        map(() => this.ngZone.run(() => this.changeDetectorRef.markForCheck())),
      )
      .subscribe(),
    );

    let output = '';

    if (Number.isNaN(seconds)) {
      return output;
    } else if (seconds <= 45) {
      output = `${seconds}s`;
    } else if (minutes < 60) {
      output = `${minutes}m`;
    } else if (hours < 24) {
      output = `${hours}h`;
    } else if (days <= 28) {
      output = `${days}d`;
    } else if (days <= 345) {
      output = `${months}mo`;
    } else {
      output = `${years}y`;
    }

    return output;
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private getSecondsUntilUpdate(seconds: number): number {
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (seconds < minute) {
      return 5; // less than 1 minute, update every 5 seconds
    } else if (seconds < hour) {
      return 30; // less than an hour, update every 30 seconds
    } else if (seconds < day) {
      return 300; // less then a day, update every 5 minutes
    } else {
      return 3600; // update every hour
    }
  }

  private removeTimer(): void {
    this.ngZone$.unsubscribe();
  }
}
