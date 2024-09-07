import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  private observer!: IntersectionObserver;

  constructor() {
    this.setupObserver();
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('visible');
            }, 500);

            if (!element.classList.contains('seen')) {
              element.classList.add('seen');
            }
          } else {
            element.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  }

  observeElement(element: HTMLElement) {
    this.observer.observe(element);
  }

  unobserveElement(element: HTMLElement) {
    this.observer.unobserve(element);
  }
}
