import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ExperienceComponent } from './experience/experience.component'
import { EducationComponent } from './education/education.component'
import { ProjectsComponent } from './projects/projects.component'
import { SkillsComponent } from './skills/skills.component'
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { animation: 'experience' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'education' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'skills' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: '**',
    redirectTo: '/home'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
