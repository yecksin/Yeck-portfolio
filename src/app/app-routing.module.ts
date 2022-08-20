import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:'about-me',
    component: AboutMeComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  // {
  //   path:'projects',
  //   component: ProjectsComponent
  // },
  // {
  //   path:'contact',
  //   component: ContactComponent
  // },
  {
    path:'',
    redirectTo:'skills',
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
