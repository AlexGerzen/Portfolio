import { Component, AfterViewInit, Output, EventEmitter ,Input } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  public portfolioHead: any;
  public aboutMeHead: any;
  public skillsHead: any;

  portfolioContainer: any;
  aboutMeContainer: any;
  mySkillsContainer: any;

  public menuSwitched : boolean = false;
  @Output() dataEvent = new EventEmitter<boolean>();
  @Input() set dataFromApp(data: boolean) {
    if(data) {
      this.switchMenu();
    } 
  }

  constructor() {
  }

  ngAfterViewInit() {
    this.portfolioHead = document.getElementById('portfolioHead');
    this.aboutMeHead = document.getElementById('aboutMeHead');
    this.skillsHead = document.getElementById('skillsHead');

    this.portfolioContainer = document.getElementById('Portfolio');
    this.aboutMeContainer = document.getElementById('AboutMe');
    this.mySkillsContainer = document.getElementById('MySkills');

    window.addEventListener("scroll", () => this.addClass());
  }

  addClass = () => {
    let portfolioTop = this.portfolioContainer.getBoundingClientRect().top;
    let aboutMeTop = this.aboutMeContainer.getBoundingClientRect().top;
    let skillsTop = this.mySkillsContainer.getBoundingClientRect().top;

    if (portfolioTop <= 100) {
      this.activatePortfolio();
    } else if (skillsTop <= 100) {
      this.activateSkills();
    } else if (aboutMeTop <= 100) {
      this.activateAboutMe();
    } else {
      this.deactivate();
    }
  }


  activatePortfolio = () => {
    this.portfolioHead.classList.add('activate');
    this.skillsHead.classList.remove('activate');
    this.aboutMeHead.classList.remove('activate');
  }

  activateSkills = () => {
    this.skillsHead.classList.add('activate');
    this.aboutMeHead.classList.remove('activate');
    this.portfolioHead.classList.remove('activate');
  }

  activateAboutMe = () => {
    this.aboutMeHead.classList.add('activate');
    this.portfolioHead.classList.remove('activate');
    this.skillsHead.classList.remove('activate');
  }

  deactivate = () => {
    this.portfolioHead.classList.remove('activate');
    this.skillsHead.classList.remove('activate');
    this.aboutMeHead.classList.remove('activate');
  }

  switchMenu() {
    if (this.menuSwitched) {
      this.menuSwitched = false;
    } else {
      this.menuSwitched = true;
    }
    this.dataEvent.emit(this.menuSwitched);
  }
}
