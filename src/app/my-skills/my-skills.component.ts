import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
 ngOnInit(): void {
   this.animateMySkills();
 }

 animateMySkills() {
  let element = document.querySelector('.my-skills-container');

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
}
