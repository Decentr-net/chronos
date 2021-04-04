import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointDirective } from './breakpoint.directive';



@NgModule({
  declarations: [BreakpointDirective],
  exports: [
    BreakpointDirective
  ],
  imports: [
    CommonModule
  ]
})
export class BreakpointModule { }
