import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Modal.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  saveProduct(): void {
    console.log('Producto guardado');
  }

}