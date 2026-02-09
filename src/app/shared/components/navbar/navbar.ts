import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CursorSnap } from '../../directives/cursor-snap';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CursorSnap],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  themeService = inject(Theme);
}
