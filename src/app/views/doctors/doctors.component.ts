import { Component } from '@angular/core';
import { LayoutsComponent } from '../../layouts/layouts.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [LayoutsComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

}
