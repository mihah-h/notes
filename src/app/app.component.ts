import { Component } from '@angular/core';

import { NotesListComponent } from './notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NotesListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
