import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Output() menuClosed = new EventEmitter<boolean>();

  closeMenu(elementId) {
    this.menuClosed.emit(true);
    this.scrollToElement(elementId);
  }

  scrollToElement(elementId) {
    const targetElementId = elementId;
    const offset = 100;
  
    const element = document.getElementById(targetElementId);
  
    if (element) {
      const offsetPosition = element.offsetTop - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
