import { NgxCurrencyDirective } from 'ngx-currency';

import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubNavMobileComponent } from '@core/sub-nav-mobile/sub-nav-mobile.component';

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
  ],
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  transferForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.transferForm = this.formBuilder.group({
      amount: [0, [Validators.required, Validators.min(100)]],
      destination: ['', [Validators.required]],
      description: ['', [Validators.maxLength(20)]],
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      console.log(this.transferForm.value);
    }
  }

  // Métodos para obtener mensajes de error
  getErrorMessage(controlName: string): string | null {
    const control = this.transferForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('min')) {
      return 'Monto mínimo $100,00';
    }
    if (control?.hasError('maxlength')) {
      return 'Máximo 20 caracteres permitidos';
    }
    return null;
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
}
