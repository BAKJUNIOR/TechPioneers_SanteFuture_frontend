import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../../domains/patient.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8081/api/patients/'; // Changez l'URL selon votre API

  constructor(private http: HttpClient) {}

  // Fonction pour créer un utilisateur
  registerPatient(user: Patient): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}
