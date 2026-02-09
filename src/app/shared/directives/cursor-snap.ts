import { Directive, ElementRef, HostListener, inject, OnDestroy } from '@angular/core';
import { Cursor } from '../../core/services/cursor';

@Directive({
  selector: '[appCursorSnap]',
})
export class CursorSnap implements OnDestroy {
  private el = inject(ElementRef);
  private cursorService = inject(Cursor);

  @HostListener('mouseenter')
  onMouseEnter() {
    // tell the service to snap to this element's position/size
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.cursorService.setSnapped(rect);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // tell the service to go back to being a dot
    this.cursorService.setNormal();
  }

  ngOnDestroy() {
    this.cursorService.setNormal();
  }
}
