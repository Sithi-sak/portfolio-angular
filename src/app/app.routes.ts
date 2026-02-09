import { Routes } from '@angular/router';
import { ProjectDetail } from './features/projects/project-detail/project-detail';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'projects/:id',
    component: ProjectDetail,
  },
  {
    path: 'skills',
    component: Skills,
  },
  {
    path: 'experience',
    component: Experience,
  },
  {
    path: 'education',
    component: Education,
  },
];
