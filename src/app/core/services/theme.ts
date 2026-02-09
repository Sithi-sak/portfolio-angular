import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  theme = signal<'light' | 'dark'>((localStorage.getItem('theme') as 'light' | 'dark') || 'light');

  constructor() {
    effect(() => {
      const mode = this.theme();
      localStorage.setItem('theme', mode);

      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }
}
