import { Component } from '@angular/core';
import { BalanceService } from '@shared/services/balance.service';

import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { RecentsComponent } from './components/recents/recents.component';
import { UserSesionComponent } from '../../core/user-sesion/user-sesion.component';
import { NgClass } from '@angular/common';
import { obPadding } from '@styles/ob-box-model.tv';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AccountBalanceComponent,
    HeaderComponent,
    ShortcutsComponent,
    RecentsComponent,
    UserSesionComponent,
    NgClass,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  obPadding = obPadding;

  balance = '';

  constructor(private balanceService: BalanceService) {
    const balance = this.balanceService.getBalance();
    this.balance = String(balance);
  }
}
