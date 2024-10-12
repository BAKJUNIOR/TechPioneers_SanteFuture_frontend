import { Component } from '@angular/core';
import { DonateComponent } from '../donate/donate.component';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports:[DonateComponent],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.css',
})
export class InfoModalComponent {
  isModalOpen = true;

  // Méthode pour fermer le modal
  closeModal() {
    this.isModalOpen = false;
  }
}
