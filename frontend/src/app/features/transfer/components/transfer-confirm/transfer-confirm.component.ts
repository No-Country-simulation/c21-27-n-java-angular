import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TransferConfirm } from '@features/transfer/types/transfer-confirm.type';

@Component({
  standalone: true,
  selector: 'app-transfer-confirm',
  templateUrl: 'transfer-confirm.component.html',
  styleUrl: 'transfer-confirm.component.scss',
  imports: [CurrencyPipe, NgOptimizedImage],
})
export class TransferConfirmComponent {
  @Input({ required: true }) transferData!: TransferConfirm;
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
