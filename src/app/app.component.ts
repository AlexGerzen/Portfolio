import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  public showMenu: boolean = false;
  public boolToHeader: boolean = false;
  public showPolicy: boolean = false;
  public showImpressum: boolean = false;
  showLoadingScreen: boolean = true;
  showLoadingScreenText: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.loadingScreenTimer();
  }

  receiveDataFromHeader(data: boolean) {
    this.showMenu = data;
  }

  receiveDataFromMobileMenu(data: boolean) {
    this.boolToHeader = data;

    setTimeout(() => {
      this.boolToHeader = false;
    }, 100)
  }

  receiveDataFromContact(data: boolean) {
    this.showPolicy = data;
  }

  receiveDataFromPolicy(data: boolean) {
    this.showPolicy = data;
  }

  receiveDataFromFooter(data: boolean) {
    this.showImpressum = data;
  }

  receiveDataFromImpressum(data: boolean) {
    this.showImpressum = data;
  }

  loadingScreenTimer() {
    setTimeout(() => {
      this.showLoadingScreen = false;
    }, 6000);
  }
}
