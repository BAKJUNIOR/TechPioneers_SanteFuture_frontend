import { Component } from '@angular/core';
import { FooterComponent } from '../../helpers/shared/footer/footer.component';
import { HeaderComponent } from '../../helpers/shared/header/header.component';
import { RouterLink } from '@angular/router';
import { InfoModalComponent } from '../../components/modals/info-modal/info-modal.component';
import { DonateComponent } from '../../components/modals/donate/donate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent,
    InfoModalComponent,
    DonateComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
