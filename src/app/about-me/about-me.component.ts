import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.animatePicture();
    this.animateAboutMe();
  }

  animateAboutMe() {
    let element = document.querySelector('.left-container');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('slide-in-left');
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  }

  animatePicture() {
    let element = document.querySelector('.right-container');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('slide-in-right');
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  }

}
