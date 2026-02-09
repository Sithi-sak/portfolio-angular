import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cursor {
  //   mouse position
  position = signal({ x: 0, y: 0 });

  // state: 'default' | 'hover' | 'snapped'
  state = signal<'default' | 'hover' | 'snapped'>('default');

  // rect of the element we're snapping to
  snapRect = signal<DOMRect | null>(null);

  // function to move cursor
  updatePosition(x: number, y: number) {
    this.position.set({ x, y });
  }

  // function to snap to element
  setSnapped(rect: DOMRect) {
    this.snapRect.set(rect);
    this.state.set('snapped');
  }

  // function to return to normal
  setNormal() {
    this.state.set('default');
    this.snapRect.set(null);
  }
}
