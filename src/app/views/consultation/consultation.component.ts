import { Component } from '@angular/core';
import { HeaderComponent } from '../../helpers/shared/header/header.component';
import { FooterComponent } from '../../helpers/shared/footer/footer.component';
import { FormsChoiceComponent } from '../../helpers/shared/forms-choice/forms-choice.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsChoiceComponent],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css',
})
export class ConsultationComponent {}
