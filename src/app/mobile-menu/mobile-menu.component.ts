import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Output() menuClosed = new EventEmitter<boolean>();

  closeMenu() {
    this.menuClosed.emit(true);
  }
}
