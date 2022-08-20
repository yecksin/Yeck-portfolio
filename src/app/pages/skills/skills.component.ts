import { Component, OnInit } from '@angular/core';
import { Skills } from './class/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = new Skills();
  skillIndex:any = null;

  constructor() { }

  ngOnInit(): void {
    this.skills.findByIndex(0)
  }

  animateImageDetail(i){
    const element = document.querySelector('.skill_detail');
    element.classList.remove('animate__bounce')
    element.classList.add( 'animate__backOutDown');
    element.addEventListener('animationend', () => {
      this.skills.findByIndex(i); 
      element.classList.remove('animate__backOutDown')
      element.classList.add('animate__backInDown');
    });
  }

}
