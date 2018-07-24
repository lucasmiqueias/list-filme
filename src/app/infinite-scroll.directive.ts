import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
}

const DEFAULT_SCROLL: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Directive({
  selector: '[appInfiniteScroll]'
})

export class InfiniteScrollDirective implements AfterViewInit {

  private scrollEvent$;

  private userScrolledDown$;

  private requestStream$;

  private requestOnScroll$;

  @Input()
  scrollCallback;

  @Input()
  immediateCallback;

  @Input()
  scrollPercent = 70;

  constructor(private elm: ElementRef) { }

  ngAfterViewInit() {

    this.registerScrollEvent();

    this.streamScrollEvent();

    this.requestCallbackOnScroll();

  }

  private registerScrollEvent() {

    this.scrollEvent$ = Observable.fromEvent(this.elm.nativeElement, 'scroll');

  }

  private streamScrollEvent() {
    this.userScrolledDown$ = this.scrollEvent$
      .map((e: any): ScrollPosition => ({
        sH: e.target.scrollHeight,
        sT: e.target.scrollTop,
        cH: e.target.clientHeight
      }))
      .pairwise()
      .filter(position => this.isUserScrollingDown(position) && this.isScrollExpectedPercent(position[1]));
  }

  private requestCallbackOnScroll() {

    this.requestOnScroll$ = this.userScrolledDown$;

    if (this.immediateCallback) {
      this.requestOnScroll$ = this.requestOnScroll$
        .starWith([DEFAULT_SCROLL, DEFAULT_SCROLL]);
    }

    this.requestOnScroll$
      .exhaustMap(() => this.scrollCallback())
      .subscribe(() => { });
  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }

}
