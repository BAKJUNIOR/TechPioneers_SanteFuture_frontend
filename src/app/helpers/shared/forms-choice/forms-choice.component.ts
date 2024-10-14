import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms-choice',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './forms-choice.component.html',
  styleUrl: './forms-choice.component.css',
})
export class FormsChoiceComponent {
  // Initialisation du formulaire en mode choix
  isForMe = true;
  isNotFormMe = false;

  choiceOptOne = true;
  choiceOptTwo = false;
  choiceOptThree = false;

  isFormChoice = true;

  // Button pour accéder au formulaire suivant
  toggleFormChoiceNext(): void {
    this.isFormChoice = !this.isFormChoice;
  }

  // Button pour retourner au formulaire précendant
  toggleFormChoicePrevious(): void {
    this.isFormChoice = !this.isFormChoice;
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
}
