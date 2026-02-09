import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../shared/data/projects';
import { CursorSnap } from '../../../shared/directives/cursor-snap';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, CursorSnap],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  id = input.required<string>();
  project = computed(() => PROJECTS.find((p) => p.id === this.id()));
}
