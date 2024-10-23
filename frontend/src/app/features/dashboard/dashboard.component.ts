import { Component } from '@angular/core';

import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountBalanceComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
