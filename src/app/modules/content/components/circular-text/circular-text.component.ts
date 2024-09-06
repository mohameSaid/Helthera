import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circular-text',
  templateUrl: './circular-text.component.html',
  styleUrls: ['./circular-text.component.scss']
})
export class CircularTextComponent implements OnInit {
  circularText: string = 'Scroll Down To know More';
  circularTextArray: string[] = [];

  ngOnInit(): void {
    this.circularTextArray = this.circularText.split('');
  }
}
