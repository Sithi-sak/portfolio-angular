import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { CustomCursor } from './shared/components/custom-cursor/custom-cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CustomCursor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
