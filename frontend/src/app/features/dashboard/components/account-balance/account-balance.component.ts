import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PATHS } from '@config/paths';
import { ObButtonCircleComponent } from '@shared/ob-button-circle/ob-button-circle.component';
import { OB_TEXT_BALANCE, OB_TEXT_HEADINGS } from '@styles/obTexts.tv';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [CurrencyPipe, ObButtonCircleComponent, NgClass],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss',
})
export class AccountBalanceComponent {
  routePaths = PATHS;
  transferPath = PATHS.FEATURES.TRANSFER.path;
  transactionsHistoryPath = PATHS.FEATURES.TRANSACTIONS.HISTORY.path;

  obBalance = OB_TEXT_BALANCE;

  balance = 155804.01;
}
