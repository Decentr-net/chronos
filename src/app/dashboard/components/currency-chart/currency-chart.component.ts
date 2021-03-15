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

  chartOptions: Highcharts.Options;

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
      legend: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
      },
      yAxis: {
        visible: true,
        opposite: true,
        endOnTick: true,
        gridLineColor: '#eeeeee',
        labels: {
          enabled: false,
        },
        title: {
          text: '',
        },
        tickAmount: 5,
        tickPosition: 'inside',
      },
      title: {
        text: '',
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'rgba(0, 98, 255, 0.7)'],
              [1, 'rgba(0, 98, 255, 0)']
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [{
        color: '#2B5DE0',
        data: this.stats,
        type: 'area',
      }]
    };
  }
}

