import { Component } from '@angular/core';
import { LayoutsComponent } from '../../layouts/layouts.component';
import { SidebarComponent } from '../../helpers/shared/sidebar/sidebar.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { HomeDashboardComponent } from '../home-dashboard/home-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutsComponent,
    SidebarComponent,
    AppointmentsComponent,
    HomeDashboardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
