import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/data/projects';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
