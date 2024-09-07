import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IntersectionObserverService } from '../services/intersection-observer.service';

@Directive({
  selector: '[animate]', // Apply this directive using this attribute in templates
})
export class AnimateDirective implements OnInit, OnDestroy {
  constructor(
    private el: ElementRef,
    private intersectionObserverService: IntersectionObserverService
  ) {}

  ngOnInit() {
    this.intersectionObserverService.observeElement(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObserverService.unobserveElement(this.el.nativeElement);
  }
}
