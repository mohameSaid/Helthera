import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarosalItem } from '../../interfaces';

@Component({
  selector: 'custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
  @Input() data: CarosalItem[] = []; // Accept an array of images or API data
  @Input() customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    responsive: {
      940: {
        items: 1,
      },
    },
    nav: false,
  };
}
