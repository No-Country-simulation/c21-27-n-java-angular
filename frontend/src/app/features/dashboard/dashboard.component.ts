import { Component, inject } from '@angular/core';

import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { BalanceService } from '@shared/services/balance.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AccountBalanceComponent,
    DashboardHeaderComponent,
    ShortcutsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  balance = '';

  constructor(private balanceService: BalanceService) {
    const balance = balanceService.getBalance();
    this.balance = String(balance);
  }
}
