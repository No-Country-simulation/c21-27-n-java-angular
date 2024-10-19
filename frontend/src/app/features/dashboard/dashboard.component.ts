import { Component } from '@angular/core';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountBalanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
