import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms-choice',
  standalone: true,
  imports: [NgClass, RouterLink, FormsModule],
  templateUrl: './forms-choice.component.html',
  styleUrl: './forms-choice.component.css',
})
export class FormsChoiceComponent {

  // // Initialisation du formulaire en mode choix
  isForMe = true;
  isNotFormMe = false;

  choiceOptOne = true;
  choiceOptTwo = false;
  choiceOptThree = false;

  isFormChoice1 = true;
  isFormChoice2 = false;
  formPatient = false;
  ticketForm = false;

  // // Button pour accéder au formulaire suivant
  toggleFormChoiceNext(): void {
    this.isFormChoice1 = false
    this.isFormChoice2 = true
  }

  // // Button pour retourner au formulaire précendant
  toggleFormChoicePrevious(): void {
    this.isFormChoice1 = !this.isFormChoice1;
  }

  choiceOptionOne(): void {
    if ((this.isForMe = true)) {
      this.isNotFormMe = false;
    }
  }

  choiceOptionTwo(): void {
    if ((this.isNotFormMe = true)) {
      this.isForMe = false;
    }
  }

  // Choisir le symptome de la maladie

  choiceSymptomOne() {
    if ((this.choiceOptOne = true)) {
      this.choiceOptTwo = false;
      this.choiceOptThree = false;
    }
  }

  choiceSymptomTwo() {
    if ((this.choiceOptTwo = true)) {
      this.choiceOptOne = false;
      this.choiceOptThree = false;
    }
  }

  choiceSymptomThree() {
    if ((this.choiceOptThree = true)) {
      this.choiceOptOne = false;
      this.choiceOptTwo = false;
    }
  }

  btnForm() {
    this.formPatient = true;
    this.isFormChoice1 = false;    
    this.isFormChoice2 = false;
  }

  btnForm1() {
    this.ticketForm = true;
    this.formPatient = false;
    this.isFormChoice1 = false;    
    this.isFormChoice2 = false;
  }

}
