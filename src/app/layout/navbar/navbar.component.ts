import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'helthera-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], // Changed from styleUrl to styleUrls
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private header: HTMLElement | null = null;
  private sticky: number = 0;

  ngAfterViewInit(): void {
    this.header = document.getElementById('header');
    if (this.header) {
      this.sticky = this.header.offsetTop;
      window.addEventListener('scroll', this.onScroll);
    }
  }

  private onScroll = (): void => {
    if (this.header) {
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add('sticky');
      } else {
        this.header.classList.remove('sticky');
      }
    }
  };

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
