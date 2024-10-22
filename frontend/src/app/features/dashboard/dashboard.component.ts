import { Component } from '@angular/core';

import { OB_TITLES } from '../../styles/titles.tv';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountBalanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  obTitle = OB_TITLES;
}
