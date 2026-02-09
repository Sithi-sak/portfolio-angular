import {
  ChangeDetectionStrategy,
  Component,
  inject,
  computed,
  HostListener,
  OnInit,
} from '@angular/core';
import { Cursor } from '../../../core/services/cursor';

@Component({
  selector: 'app-custom-cursor',
  imports: [],
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCursor implements OnInit {
  protected readonly cursorService = inject(Cursor);

  private mouseX = 0;
  private mouseY = 0;

  protected readonly isSnapped = computed(() => this.cursorService.state() === 'snapped');

  // compute style based on the state
  protected readonly cursorStyles = computed(() => {
    const pos = this.cursorService.position();
    const state = this.cursorService.state();
    const rect = this.cursorService.snapRect();

    if (state === 'snapped' && rect) {
      return {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: `translate(${rect.left}px, ${rect.top}px)`,
        borderRadius: '0px',
        opacity: '1',
      };
    }

    // default cursor
    return {
      width: '16px',
      height: '16px',
      transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
      borderRadius: '50%',
      opacity: '1',
    };
  });

  ngOnInit(): void {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    this.animate();
  }

  private animate() {
    this.cursorService.updatePosition(this.mouseX, this.mouseY);
    requestAnimationFrame(() => this.animate());
  }

  //   @HostListener('window:mousemove', ['$event'])
  //   onMouseMove(event: MouseEvent) {
  //     this.cursorService.updatePosition(event.clientX, event.clientY);
  //   }
}
