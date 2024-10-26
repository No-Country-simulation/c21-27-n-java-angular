import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

export type Transfer = {
  amount: string;
  destination: string;
  description?: string;
};

@Component({
  standalone: true,
  selector: 'app-transfer-confirm',
  templateUrl: 'transfer-confirm.component.html',
  styleUrl: 'transfer-confirm.component.scss',
  imports: [CurrencyPipe, NgOptimizedImage],
})
export class TransferConfirmComponent {
  sourceAccount = '9A8B7C6D';

  @Input({ required: true }) transferData?: Transfer;
  @Output() confirmed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.transferData = {
      amount: '18822',
      destination: 'A1B2C3E4',
      description: '',
    };
  }

  ngOnChanges() {
    console.log(this.transferData);
  }

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
}
