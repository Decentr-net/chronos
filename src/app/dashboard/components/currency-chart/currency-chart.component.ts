import { ChangeDetectionStrategy, Compiler, Component, Injector, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ComponentFactoryClass } from './utils/component-factory';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from './tooltip';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CurrencyChartComponent implements OnInit {

  @Input() stats;

  constructor(
    private injector: Injector,
    private compiler: Compiler,
  ) {
  }

  ngOnInit(): void {
    Highcharts.chart('chart-container', this.setChartOptions());
  }

  private setChartOptions(): Highcharts.Options {
    const component = new ComponentFactoryClass<TooltipModule, TooltipComponent>
    (this.injector, this.compiler).createComponent(TooltipModule, TooltipComponent);

    return {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'line',
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        shadow: false,
        shape: 'square',
        outside: true,
        padding: 0,
        formatter(): string {
          component.instance.data = this;
          component.changeDetectorRef.detectChanges();
          return component.location.nativeElement.outerHTML;
        },
      },
      series: [
        {
          type: 'line',
          data: this.stats
        }
      ]
    };
  }
}

