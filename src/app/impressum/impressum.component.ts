import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  @Output() impressumClose = new EventEmitter<boolean>();

  closeImpressum() {
    this.impressumClose.emit(false);
  }
}
