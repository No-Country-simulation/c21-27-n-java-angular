import { Component } from '@angular/core';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { ObButtonCircleComponent } from '../../shared/ob-button-circle/ob-button-circle.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountBalanceComponent, ObButtonCircleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
