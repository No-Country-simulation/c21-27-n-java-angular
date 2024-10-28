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
import { TransferService } from './services/transfer.service';
import { TransferBody } from './types/transfer-confirm.type';
import { TransferErrorComponent } from './components/transfer-error/transfer-error.component';
import { HttpErrorResponse } from '@angular/common/http';

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
    TransferErrorComponent,
  ],
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  transferForm: FormGroup;
  transferBody: TransferBody;
  showModal = signal(false);
  onError = false;
  onErrorMessage = '';
  private _isLoading = false;
  private _sourceAccount = 'A4860A0337O2584A';

  constructor(
    private _formBuilder: FormBuilder,
    private _transfer: TransferService
  ) {
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
      source: this._sourceAccount,
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

  onModalConfirmed(confirmed: boolean) {
    this.showModal.set(false);

    if (confirmed) {
      this._isLoading = true;

      this._transfer.sendTransfer(this.transferBody).subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err: HttpErrorResponse) => {
          this.onError = true;
          this.onErrorMessage = err.message;

          setTimeout(() => {
            this.onError = false;
          }, 5000);

          console.error(err);
        },
        complete: () => {
          this._isLoading = false;
        },
      });
    }
  }
}
