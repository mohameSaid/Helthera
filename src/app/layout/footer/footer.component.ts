import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'helthera-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @ViewChildren('listContainer') listContainers!: QueryList<ElementRef>;
  // Called after the component's view has been initialized
  ngAfterViewInit(): void {
    this.setupFooterListToggle();
  }
  private setupFooterListToggle(): void {
    this.listContainers.forEach((container: any) => {
      const listButn = container.nativeElement.querySelector('h3');
      const showenList = container.nativeElement.querySelector('ul');

      if (listButn && showenList) {
        listButn.addEventListener('click', () => {
          showenList.classList.toggle('show-footer-list');
        });
      }
    });
  }
}
