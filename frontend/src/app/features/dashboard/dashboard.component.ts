import { Component } from '@angular/core';

import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountBalanceComponent, DashboardHeaderComponent, ShortcutsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
