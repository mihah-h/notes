import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  standalone: true,
  templateUrl: './create-note.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {
  @Output() public clickOnSaved = new EventEmitter<string>();
  @Output() public clickOnDelete = new EventEmitter<void>();

  public value = '';

  public get valueInvalid() {
    return !this.value;
  }

  public emitClickOnSave() {
    this.clickOnSaved.emit(this.value);
    this.value = '';
  }

  public emitClickOnDelete() {
    this.clickOnDelete.emit();
  }
}
