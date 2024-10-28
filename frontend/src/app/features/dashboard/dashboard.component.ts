import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BalanceService } from '@shared/services/balance.service';
import { obPadding } from '@styles/ob-box-model.tv';

import { UserSesionComponent } from '../../core/user-sesion/user-sesion.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { RecentsComponent } from './components/recents/recents.component';
import { ObButtonCircleComponent } from '@shared/components/ob-button-circle/ob-button-circle.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AccountBalanceComponent,
    RecentsComponent,
    UserSesionComponent,
    NgClass,
    ObButtonCircleComponent,
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
