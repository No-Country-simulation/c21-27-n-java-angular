import { NgxCurrencyDirective } from 'ngx-currency';

import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubNavMobileComponent } from '@core/sub-nav-mobile/sub-nav-mobile.component';
import { TransferConfirmComponent } from './components/transfer-confirm/transfer-confirm.component';
import { TransferConfirm } from './types/transfer-confirm.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass,
    SubNavMobileComponent,
    NgxCurrencyDirective,
    ReactiveFormsModule,
    CommonModule,
    TransferConfirmComponent,
  ],
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  transferForm: FormGroup;
  transferBody: TransferConfirm;
  showModal = signal(false);

  constructor(private _formBuilder: FormBuilder, private _http: HttpClient) {
    this.transferForm = this._formBuilder.group({
      amount: [0, [Validators.required, Validators.min(100)]],
      destination: ['', [Validators.required]],
      description: ['', [Validators.maxLength(20)]],
    });

    this.transferBody = {
      amount: '',
      destination: '',
      source: '',
      description: '',
    };
  }

  onSubmit() {
    this.transferBody = {
      ...this.transferForm.value,
      source: 'ZYXWVU987',
    };

    this.showModal.set(true);
  }

  // Métodos para obtener mensajes de error
  getErrorMessage(controlName: string): string | null {
    const control = this.transferForm.get(controlName);

    switch (true) {
      case control?.hasError('required'):
        return 'Este campo es obligatorio';
      case control?.hasError('min'):
        return 'Monto mínimo $100,00';
      case control?.hasError('maxlength'):
        return 'Máximo 20 caracteres permitidos';
      default:
        return null;
    }
  }

  get amountCtl() {
    return this.transferForm.get('amount');
  }

  get destinationCtl() {
    return this.transferForm.get('destination');
  }

  get descriptionCtl() {
    return this.transferForm.get('description');
  }

  moveCursorToEnd(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    setTimeout(() => {
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);
  }

  // TODO
  onModalConfirmed(confirmed: boolean) {
    this.showModal.set(false);
    if (confirmed) {
      // const token = '';
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // });
      // this._http.post('', this.transferBody, { headers });

      console.log('Transferencia confirmada.');
    }
  }
}
