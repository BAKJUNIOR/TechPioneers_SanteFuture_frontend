import { Component } from '@angular/core';
import { LayoutsComponent } from '../../layouts/layouts.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carnet',
  standalone: true,
  imports: [LayoutsComponent, RouterLink],
  templateUrl: './carnet.component.html',
  styleUrl: './carnet.component.css'
})
export class CarnetComponent {

}
