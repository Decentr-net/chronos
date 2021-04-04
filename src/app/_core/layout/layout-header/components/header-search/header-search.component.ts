import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, mergeMap, share, startWith, switchMap } from 'rxjs/operators';
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
  @ViewChild('blockResult') public blockResultTemplate: TemplateRef<{}>;
  @ViewChild('txResult') public txResultTemplate: TemplateRef<{}>;

  public searchControl: FormControl = new FormControl('');

  public searchResult$: Observable<SearchResult | null>;

  public icon: string;

  public resultTemplate: TemplateRef<{}>;

  public isDropdownOpened: boolean;

  public appRoute: typeof AppRoute = AppRoute;

  constructor(
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
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
    this.searchResult$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      switchMap((searchValue) => searchValue
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
          : svgSearchNegativeIcon.name
      ),
      untilDestroyed(this),
    ).subscribe((icon) => {
      this.icon = icon;
      this.changeDetectorRef.markForCheck();
    });

    this.searchResult$.pipe(
      map((result) => {
        if (!result) {
          return null;
        }

        switch (result.constructor) {
          case BlockSearchItem:
            return this.blockResultTemplate;
          case TransactionSearchItem:
            return this.txResultTemplate;
          default:
            return null;
        }
      }),
      untilDestroyed(this),
    ).subscribe((resultTemplate) => this.resultTemplate = resultTemplate);
  }

  public onLinkClick(): void {
    this.searchControl.reset();
  }

  public closeDropdown(): void {
    this.isDropdownOpened = false;
  }

  public openDropdown(): void {
    this.isDropdownOpened = true;
  }
}
