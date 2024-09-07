import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'helthera-link-button',
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent {
  @Input() label: string = '';
  @Input() size: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() icon: boolean = true;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
