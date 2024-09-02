import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[typingEffect]',
})
export class TypingEffectDirective implements AfterViewInit, OnDestroy {
  @Input() textToType: string = ''; // The text to type into the element
  @Input() typingSpeed: number = 100; // Speed of typing in milliseconds
  @Input() startDelay: number = 0; // Optional delay before typing starts

  private typingTimeout: any; // To hold the timeout reference

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.simulateTyping(), this.startDelay);
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  private simulateTyping() {
    const element = this.el.nativeElement as HTMLElement;
    element.innerHTML = '';
    let index = 0;

    const type = () => {
      if (index < this.textToType.length) {
        element.innerHTML += this.textToType.charAt(index);
        index++;
        this.typingTimeout = setTimeout(type, this.typingSpeed);
      }
    };

    type();
  }
}
