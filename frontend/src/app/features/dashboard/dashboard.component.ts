import { AsyncPipe, CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { obPadding } from '@styles/ob-box-model.tv';

import { UserSesionComponent } from '../../core/user-sesion/user-sesion.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { RecentsComponent } from './components/recents/recents.component';
import { ObButtonCircleComponent } from '@shared/components/ob-button-circle/ob-button-circle.component';
import { BalanceService } from './services/balance.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AccountBalanceComponent,
    RecentsComponent,
    UserSesionComponent,
    NgClass,
    ObButtonCircleComponent,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  obPadding = obPadding;
  balance = '';

  constructor(private _balanceService: BalanceService) {}

  ngOnInit() {
    this._balanceService.get().subscribe((res) => {
      this.balance = String(res.balance);
    });
  }
}
