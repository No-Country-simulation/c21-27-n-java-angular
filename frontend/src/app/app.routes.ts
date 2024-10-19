import { Routes } from '@angular/router';
import { PATHS } from './config/paths';
import { LoginComponent } from './core/login/login.component';
import { ReceiptComponent } from './features/account/receipt/receipt.component';
import { TransactionsComponent } from './features/account/transactions/transactions.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransferComponent } from './features/transfer/transfer.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: PATHS.CORE.LOGIN, component: LoginComponent },
  { path: PATHS.FEATURES.DASHBOARD, component: DashboardComponent },
  {
    path: PATHS.FEATURES.ACCOUNT.TRANSACTIONS,
    component: TransactionsComponent,
  },
  { path: 'account/:receiptId', component: ReceiptComponent },
  { path: PATHS.FEATURES.TRANSFER, component: TransferComponent },
  { path: '**', redirectTo: '/dashboard' },
];
