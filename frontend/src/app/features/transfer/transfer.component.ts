import { NgxCurrencyDirective } from 'ngx-currency';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  ],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {
  transferForm = new FormGroup({
    amount: new FormControl(''),
    destination: new FormControl(''),
    description: new FormControl(''),
  });

  moveCursorToEnd(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    // Mover el cursor al final
    setTimeout(() => {
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);
  }
}
