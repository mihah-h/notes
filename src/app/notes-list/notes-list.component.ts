import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NoteComponent } from './note/note.component';
import { CreateNoteComponent } from './create-note/create-note.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [
    NoteComponent,
    CreateNoteComponent
  ],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent {
  public notesList: string[] = [];
  public createNoteComponentIsDisplayed = false;

  public get notesIsMissing() {
    return this.notesList.length === 0 && !this.createNoteComponentIsDisplayed;
  };

  public get notesIsExist() {
    return this.notesList.length !== 0;
  }

  public saveNote(note: string) {
    this.notesList.push(note);
    this.createNoteComponentIsDisplayed  = false;
  }

  public deleteNote(noteIndex: number) {
    this.notesList.splice(noteIndex, 1);
  }

  public displayCreateNoteComponent() {
    this.createNoteComponentIsDisplayed = true;
  }

  public hideCreateNoteComponent() {
    this.createNoteComponentIsDisplayed  = false;
  }
}
