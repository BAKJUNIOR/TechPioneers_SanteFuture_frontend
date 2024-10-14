import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ConsultationComponent } from './views/consultation/consultation.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AppointmentsComponent } from './views/appointments/appointments.component';
import { CarnetComponent } from './views/carnet/carnet.component';
import { HomeDashboardComponent } from './views/home-dashboard/home-dashboard.component';
import { DoubleFactorComponent } from './views/auth/double-factor/double-factor.component';
import { SettingsComponent } from './views/settings/settings.component';
import { DoctorsComponent } from './views/doctors/doctors.component';

export const routes: Routes = [

    // Auth route
    {
        path: "auth",
        children: [
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "double-factor", component: DoubleFactorComponent },
        ]
    },

    // Home route
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "", component: HomeComponent}
        ]
    },

    //  Dashboard route
    {
        path: "dashboard",
        // component: DashboardComponent,
        children: [
            // { path: "", component: DashboardComponent},
            { path: "", component: HomeDashboardComponent},
            { path: "appointments", component: AppointmentsComponent},
            { path: "carnet", component: CarnetComponent},
            { path: "settings", component: SettingsComponent},
            { path: "doctors", component: DoctorsComponent}
        ]
    },

    // Consultation route
    {
        path: "consultations",
        component: ConsultationComponent,
        children: [
            { path: "infos", component: ConsultationComponent }
        ]
    }
    
];
