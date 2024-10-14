import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here

@Component({
  selector: 'app-double-factor',
  standalone: true,
  imports: [],
  templateUrl: './double-factor.component.html',
  styleUrl: './double-factor.component.css',
})
export class DoubleFactorComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  userCode: any;
}
