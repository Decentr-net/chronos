import {
  ChangeDetectionStrategy,
  Compiler,
  Component,
  ComponentFactoryResolver,
  ElementRef, Inject,
  InjectionToken,
  Injector,
  Input,
  OnInit,
  Type,
} from '@angular/core';
import * as Highcharts from 'highcharts';

import { ChartTooltip } from './chart-tooltip';
import { ComponentFactoryClass } from './utils/component-factory';
import { DashboardModule } from '../../dashboard.module';

export type ChartPoint = [number, number];

export const CHART_TOOLTIP: InjectionToken<Type<ChartTooltip>> = new InjectionToken('CHART_TOOLTIP');

enum ChartColor {
  Blue = 'blue',
  Green = 'green',
}

type ChartPointColor = {
  color: string;
  gradient: {
    start: string;
    end: string;
  };
};

const COLORS: Record<ChartColor, ChartPointColor> = {
  [ChartColor.Blue]: {
    color: '#9F65FD',
    gradient: {
      start: 'rgba(159, 101, 253, .24)',
      end: 'rgba(159, 101, 253, 0)',
    },
  },
  [ChartColor.Green]: {
    color: '#03B15E',
    gradient: {
      start: 'rgba(3, 177, 94, .24)',
      end: 'rgba(3, 177, 94, 0)',
    },
  },
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input() data: ChartPoint[];

  @Input() color: 'blue' | 'green';

  private chartColors: ChartPointColor;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private elementRef: ElementRef<HTMLElement>,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(CHART_TOOLTIP) private chartTooltip: Type<ChartTooltip>,
  ) {
  }

  ngOnInit(): void {
    switch (this.color) {
      case ChartColor.Blue: this.chartColors = COLORS[ChartColor.Blue]; break;
      case ChartColor.Green: this.chartColors = COLORS[ChartColor.Green]; break;
    }

    Highcharts.chart(this.elementRef.nativeElement, this.setChartOptions());
  }

  private setChartOptions(): Highcharts.Options {
    const component = new ComponentFactoryClass<DashboardModule, ChartTooltip>(this.injector, this.compiler)
      .createComponent(DashboardModule, this.chartTooltip);

    const defaultOptions: Highcharts.Options = {
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      time: {
        useUTC: false,
      },
      title: {
        text: '',
      },
    };

    return {
      ...defaultOptions,
      chart: {
        height: 250,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 45,
        marginTop: 10,
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EDEDEE',
        borderRadius: 12,
        borderWidth: 2,
        enabled: true,
        headerShape: 'square',
        shadow: false,
        formatter(): string {
          component.instance.data = this;
          return component.location.nativeElement.outerHTML;
        },
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, this.chartColors.gradient.start],
              [1, this.chartColors.gradient.end],
            ],
          },
          lineWidth: 2,
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: true,
                radius: 5,
              },
            },
          },
          states: {
            hover: {
              lineWidth: 2,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          color: this.chartColors.color,
          data: this.data,
          type: 'area',
        },
      ],
      xAxis: {
        dateTimeLabelFormats: {
          millisecond: '%H:%M:%S.%L',
          second: '%H:%M:%S',
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%e %b',
          week: '%e %b',
          month: '%b \'%y',
          year: '%Y',
        },
        labels: {
          enabled: true,
          y: 17,
          style: {
            color: '#B6B7BA',
            fontSize: '12px',
          },
        },
        tickLength: 5,
        type: 'datetime',
        title: {
          text: '',
        },
      },
      yAxis: {
        alignTicks: true,
        visible: true,
        opposite: true,
        endOnTick: true,
        gridLineColor: '#EDEDEE',
        labels: {
          enabled: true,
          align: 'left',
          step: 2,
          x: 8,
          y: -8,
          style: {
            color: '#B6B7BA',
            fontSize: '12px',
          },
        },
        tickAmount: 8,
        tickPosition: 'inside',
        title: {
          text: '',
        },
        showLastLabel: false,
      },
    };
  }
}
