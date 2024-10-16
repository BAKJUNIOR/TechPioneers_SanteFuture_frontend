import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import {Router} from '@angular/router'
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  OnInit } from '@angular/core';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  monFormulaire!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.monFormulaire = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      numbers: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      adresse: [''],
      gender: ['', Validators.required],
      priorite: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.monFormulaire.valid) {
      const formValues = this.monFormulaire.value;

      // Appel au service pour envoyer les données au backend
     
    }
  }
}
