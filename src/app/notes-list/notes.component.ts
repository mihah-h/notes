import { Component } from '@angular/core';
import { NoteComponent } from './note/note.component';
import { CreateNoteComponent } from './create-note/create-note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    NoteComponent,
    CreateNoteComponent
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

}
