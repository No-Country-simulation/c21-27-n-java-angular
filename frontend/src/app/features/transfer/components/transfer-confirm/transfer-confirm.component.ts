import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-transfer-confirm',
  templateUrl: 'transfer-confirm.component.html',
  styleUrl: 'transfer-confirm.component.scss',
})
export class TransferConfirmComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
