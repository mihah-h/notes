import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input() public value!: string;

  @Output() public clickOnDelete = new EventEmitter<void>;

  public emitClickOnDelete() {
    this.clickOnDelete.emit();
  }
}
