import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsSvgs } from '../../constants/about-us-svgs';
import { CarosalItem } from 'src/app/modules/shared/interfaces';

@Component({
  selector: 'helthera-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  svgs = AboutUsSvgs;
  carosalData!: CarosalItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carosalData = [
      {
        svg: this.svgs.landingShape,
        caption: 'Our Journey, your health.',
      },
      {
        svg: this.svgs.landingShape,
        caption: 'Our Journey, your health.',
      },
    ];
  }
}
