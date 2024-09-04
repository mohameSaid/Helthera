import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsSvgs } from '../../constants/about-us-svgs';

@Component({
  selector: 'helthera-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  svgs = AboutUsSvgs;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
