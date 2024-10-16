import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/auth.service';
import { User } from '../../../domains/user.model';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.monFormulaire = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false] // Pour la case "Se souvenir de moi"
    });
  }

  onSubmit(): void {
    if (this.monFormulaire.valid) {
      console.log(this.monFormulaire.value);
      // Traitez ici les données du formulaire
    }
  }
}
