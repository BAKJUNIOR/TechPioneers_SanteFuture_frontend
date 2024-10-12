import { UrlCodec } from '@angular/common/upgrade';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 title = 'Bienvenue sur Cliniva';
  description = 'Veuillez vous identifier pour acceder a votre espace.'

  ngOnInit(): void {
      // UrlCodec
  }
}
