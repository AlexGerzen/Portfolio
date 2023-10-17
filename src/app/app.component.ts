import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  public showMenu: boolean = false;
  public boolToHeader: boolean = false;

  receiveDataFromHeader(data: boolean) {
    this.showMenu = data;
  }

  receiveDataFromMobileMenu(data: boolean) {
    this.boolToHeader = data;
    
    setTimeout(() => {
      this.boolToHeader = false;
    },100)
  }
}
