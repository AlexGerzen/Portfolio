import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  @Output() policyClosed = new EventEmitter<boolean>();

  closePolicy() {
    this.policyClosed.emit(false);
  }
}
