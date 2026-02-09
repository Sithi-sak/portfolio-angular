import { Component, signal } from '@angular/core';
import { Skill } from '../../shared/models/skill.model';
import { TechCard } from '../../shared/components/tech-card/tech-card';

@Component({
  selector: 'app-skills',
  imports: [TechCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly techStack = signal<Skill[]>([
    {
      name: 'HTML',
      icon: 'assets/devicons/html5-original.svg',
      level: 'Advanced',
    },
    {
      name: 'CSS',
      icon: 'assets/devicons/css3-original.svg',
      level: 'Advanced',
    },
    {
      name: 'Javascript',
      icon: 'assets/devicons/javascript-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'Angular',
      icon: 'assets/devicons/angular-original.svg',
      level: 'Beginner/Learning',
    },
    {
      name: 'Typescript',
      icon: 'assets/devicons/typescript-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'Tailwind CSS',
      icon: 'assets/devicons/tailwindcss-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'shadcn/ui',
      icon: 'assets/devicons/shadcnui.svg',
      level: 'Beginner',
    },
    {
      name: 'Node.js',
      icon: 'assets/devicons/nodejs-original.svg',
      level: 'Beginner',
    },
    {
      name: 'SQLite',
      icon: 'assets/devicons/sqlite-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'PostgreSQL',
      icon: 'assets/devicons/postgresql-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'Git',
      icon: 'assets/devicons/git-original.svg',
      level: 'Intermediate',
    },
    {
      name: 'Supabase',
      icon: 'assets/devicons/supabase-original.svg',
      level: 'Beginner',
    },
    {
      name: 'Linux',
      icon: 'assets/devicons/linux-original.svg',
      level: 'Advanced',
    },
  ]);
}
