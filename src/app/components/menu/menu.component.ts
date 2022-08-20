import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  optionsList = [
    {
      name:'About me',
      imageBg:'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      link:'about-me'
    },
    {
      name:'Skills',
      imageBg:'https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link:'skills'
    },
    {
      name:'Projects',
      imageBg:'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link:'projects'
    },
    {
      name:'Contact',
      imageBg:'https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      link:'contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen(){
    document.getElementById("menu_container")?.classList.toggle("show")
  }

}
