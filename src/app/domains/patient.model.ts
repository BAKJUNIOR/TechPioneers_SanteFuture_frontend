// models/patient.model.ts

import { DossierMedical } from './dossier.model';
import { Ticket } from './ticket.model';
import { Affectation } from './models/affectation.model';
import { PrioritePatient } from './models/priorite.model';
import { Gender } from './models/gender.model';

export class Patient {
  idPerson!: number;              // Correspond à l'idPerson dans Person.java
  firstName!: string;             // Correspond à firstName dans Person.java
  lastName!: string;              // Correspond à lastName dans Person.java
  numbers?: string;               // Correspond à numbers dans Person.java
  dateOfBirth!: Date;             // Correspond à dateOfBirth dans Person.java
  urlPicture?: string;            // Correspond à urlPicture dans Person.java
  slug!: string;                  // Correspond à slug dans Person.java
  gender!: Gender;                // Correspond à gender dans Person.java
  adresse?: string;               // Correspond à adresse dans Person.java
  tickets?: Ticket[];             // Correspond à OneToMany dans Patient.java
  priorite!: PrioritePatient;     // Correspond à priorite dans Patient.java
  dossierMedical?: DossierMedical; // Correspond à OneToOne dans Patient.java
  affectations?: Affectation[];   // Correspond à OneToMany dans Patient.java
}
