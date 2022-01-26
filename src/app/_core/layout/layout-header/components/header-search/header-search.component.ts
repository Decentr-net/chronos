import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { filter, map, mergeMap, share, startWith, switchMap } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { svgSearchIcon } from '@shared/svg-icons/search';
import { svgSearchNegativeIcon } from '@shared/svg-icons/search-negative';
import { svgSearchPositiveIcon } from '@shared/svg-icons/search-positive';
import { ONE_SECOND } from '@shared/utils/date';
import { BlockSearchItem, SearchResult, SearchService, TransactionSearchItem } from '@core/services/search';
import { AppRoute } from '../../../../../app-route';

@UntilDestroy()
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent implements OnInit {
  @Input() public autofocus = false;

  @ViewChild('blockResult') public blockResultTemplate: TemplateRef<{}>;

  @ViewChild('txResult') public txResultTemplate: TemplateRef<{}>;

  @ViewChild('inputElement', { static: true }) public inputElement: ElementRef<HTMLInputElement>;

  public searchControl: FormControl = new FormControl('');

  public searchResult$: Observable<SearchResult | null>;

  public icon: string;

  public resultTemplate: TemplateRef<{}>;

  public link: string[];

  public isDropdownOpened: boolean;

  public appRoute: typeof AppRoute = AppRoute;

  constructor(
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private searchService: SearchService,
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgSearchIcon,
      svgSearchNegativeIcon,
      svgSearchPositiveIcon,
    ]);
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      untilDestroyed(this),
    ).subscribe(() => {
      this.reset();
    });

    this.searchResult$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      switchMap((searchValue: string) => searchValue
        ? timer(ONE_SECOND / 4).pipe(
          mergeMap(() => this.searchService.search(searchValue)),
        )
        : of(null),
      ),
      share(),
    );

    this.searchResult$.pipe(
      map(result => !result
        ? svgSearchIcon.name
        : result.result
          ? svgSearchPositiveIcon.name
          : svgSearchNegativeIcon.name,
      ),
      untilDestroyed(this),
    ).subscribe((icon) => {
      this.icon = icon;
      this.changeDetectorRef.markForCheck();
    });

    this.searchResult$.pipe(
      untilDestroyed(this),
    ).subscribe((result) => {
      if (result instanceof BlockSearchItem) {
        this.resultTemplate = this.blockResultTemplate;
        this.link = result.result ? ['/', AppRoute.Blocks, result.result.header.height.toString()] : null;
        return;
      }

      if (result instanceof TransactionSearchItem) {
        this.resultTemplate = this.txResultTemplate;
        this.link = result.result ? ['/', AppRoute.Transactions, result.result.hash] : null;
        return;
      }

      this.resultTemplate = null;
      this.link = null;
    });

    if (this.autofocus) {
      this.inputElement.nativeElement.focus();
    }
  }

  @HostListener('keydown.enter') public onDownEnter(): void {
    this.navigateTo();
    this.reset();
  }

  public reset(): void {
    this.searchControl.reset();
  }

  public navigateTo(): void {
    if (!this.link) {
      return;
    }

    this.router.navigate(this.link);
  }

  public closeDropdown(): void {
    timer(200).pipe(
      untilDestroyed(this),
    ).subscribe(() => {
      this.isDropdownOpened = false;
      this.changeDetectorRef.markForCheck();
    });
  }

  public openDropdown(): void {
    this.isDropdownOpened = true;
  }
}
