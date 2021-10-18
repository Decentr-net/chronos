import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleComponent,
      multi: true,
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor {
  @HostBinding('class.is-active')
  public value = false;

  private onChange: (value: boolean) => void;

  private onTouched: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  @HostListener('click')
  public onClick(): void {
    this.value = !this.value;

    this.onChange(this.value);
    this.onTouched();
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: boolean): void {
    this.value = value;
    this.changeDetectorRef.detectChanges();
  }
}
