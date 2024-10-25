import { Component } from '@angular/core';
import { BalanceService } from '@shared/services/balance.service';

import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { RecentsComponent } from './components/recents/recents.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AccountBalanceComponent,
    HeaderComponent,
    ShortcutsComponent,
    RecentsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  balance = '';

  constructor(private balanceService: BalanceService) {
    const balance = this.balanceService.getBalance();
    this.balance = String(balance);
  }
}
