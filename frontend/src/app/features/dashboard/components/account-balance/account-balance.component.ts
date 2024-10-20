import { Component } from '@angular/core';
import { OB_BALANCE } from '../../../../styles/balance.tv';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss',
})
export class AccountBalanceComponent {
  obBalance = OB_BALANCE;
}
