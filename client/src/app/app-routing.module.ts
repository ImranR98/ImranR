import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/experience',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '404',
        component: Error404Component
      }
    ]
  },

  {
    path: '**',
    redirectTo: '/home/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
