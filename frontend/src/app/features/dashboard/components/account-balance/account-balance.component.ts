import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ObButtonCircleComponent } from '@shared/ob-button-circle/ob-button-circle.component';
import { OB_TEXT_BALANCE } from '@styles/obTexts.tv';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [CurrencyPipe, ObButtonCircleComponent, NgClass],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss',
})
export class AccountBalanceComponent {
  obBalance = OB_TEXT_BALANCE;
  balance = 155804.01;
}
