import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarsComponent } from '../components/navbars/navbars.component';
import { CarnetComponent } from '../views/carnet/carnet.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [SidebarComponent, NavbarsComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
