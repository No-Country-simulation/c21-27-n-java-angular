import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ObButtonCircleComponent } from '@shared/components/ob-button-circle/ob-button-circle.component';
import { OB_TEXT_BALANCE } from '@styles/ob-text.tv';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [CurrencyPipe, ObButtonCircleComponent, NgClass],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss',
})
export class AccountBalanceComponent {
  obBalance = OB_TEXT_BALANCE;
  @Input({ required: true }) balance = '';

  showBalance = true;

  toggleBalanceVisibility() {
    this.showBalance = !this.showBalance;
  }
}
