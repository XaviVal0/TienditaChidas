import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Modal } from '../../../components/Modal/Modal';
@Component({
  selector: 'app-products',
  imports: [Modal],
  templateUrl: './Products.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }


}
