import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsChoiceComponent } from '../../components/forms-choice/forms-choice.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsChoiceComponent],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {

}
