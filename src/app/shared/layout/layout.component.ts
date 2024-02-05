import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  onHover: boolean[] = [];

  setHover(index: number, state: boolean) {
    this.onHover[index] = state;
  }
}
