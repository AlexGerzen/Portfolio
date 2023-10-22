import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
ngOnInit(): void {
  this.animateJoin()
  this.animateElPolloLoco();
}

animateElPolloLoco() {
  let element = document.querySelector('.elpolloloco-container');

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

animateJoin() {
  let element = document.querySelector('.join-container');

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
