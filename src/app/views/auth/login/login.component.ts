import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  onSubmit() {
    throw onErrorResumeNext('error')
  }
}
