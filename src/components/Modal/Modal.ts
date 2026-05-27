import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  isOpen: boolean = true;

  closeModal(): void {
    this.isOpen = false;
  }

  saveProduct(): void {
    console.log('Producto guardado');
  }

}