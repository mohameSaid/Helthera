import { Component } from '@angular/core';
import { About_Us_Shape } from '../../constants/home-svg/about-us-shape';
import { Testimonial_Shape } from '../../constants/home-svg/testimonial';
import { TestimonialUsers } from '../../constants/testimonials-users';
import {
  Testimonial_arraw_left,
  Testimonial_arraw_right,
} from '../../constants/home-svg/arraws-testimonial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private observer!: IntersectionObserver;
  // SVG
  aboutUsSvg: string = '';
  testimonial_Shape: string = '';
  testimonialArrawRight: string = '';
  testimonialArrawLeft: string = '';

  testemonialsUsers: any[] = TestimonialUsers;
  selectedTestimonialIndex: number = 0;
  selectedTestimonial: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedTestimonial =
      this.testemonialsUsers[this.selectedTestimonialIndex];
    this.aboutUsSvg = About_Us_Shape;
    this.testimonial_Shape = Testimonial_Shape;
    this.testimonialArrawLeft = Testimonial_arraw_left;
    this.testimonialArrawRight = Testimonial_arraw_right;
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setestimonial(data: any) {
    this.selectedTestimonial = data;
  }

  setupIntersectionObserver(): void {
    const animatedElements = document.querySelectorAll('.animated');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add('visible'); // Add 'visible' class on scroll
            }, 500);

            // Only add 'seen' class if it hasn't been added before
            if (!(entry.target as HTMLElement).classList.contains('seen')) {
              (entry.target as HTMLElement).classList.add('seen');
            }
          } else {
            (entry.target as HTMLElement).classList.remove('visible'); // Remove 'visible' when not in viewport
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    animatedElements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  goTostayTuned(): void {
    this.router.navigate(['content/stay-tuned']);
  }

  swap(direction: 'left' | 'right') {
    if (direction === 'left') {
      // Move to the previous testimonial
      this.selectedTestimonialIndex =
        (this.selectedTestimonialIndex - 1 + this.testemonialsUsers.length) %
        this.testemonialsUsers.length;
    } else {
      // Move to the next testimonial
      this.selectedTestimonialIndex =
        (this.selectedTestimonialIndex + 1) % this.testemonialsUsers.length;
    }

    this.selectedTestimonial =
      this.testemonialsUsers[this.selectedTestimonialIndex];
  }
  // Called when the component is destroyed
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
