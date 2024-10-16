import { Component } from '@angular/core';
import { LayoutsComponent } from "../../layouts/layouts.component";
import { SidebarComponent } from "../../helpers/shared/sidebar/sidebar.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [LayoutsComponent, SidebarComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  isModalOpen = false;

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

}
