import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  showLoadingScreenText: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.loadingScreenTextTimer();
  }

  loadingScreenTextTimer() {
    setTimeout(() => {
      this.showLoadingScreenText = true;
    }, 4000);
  }
}
