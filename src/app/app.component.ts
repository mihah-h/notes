import { Component } from '@angular/core';
import { NotesComponent } from './notes-list/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NotesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
