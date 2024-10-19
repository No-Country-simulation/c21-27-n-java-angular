import { Routes } from '@angular/router';
import { PATHS } from './config/paths';
import { LoginComponent } from './core/login/login.component';
import { ReceiptComponent } from './features/account/receipt/receipt.component';
import { TransactionsComponent } from './features/account/transactions/transactions.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransferComponent } from './features/transfer/transfer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: PATHS.CORE.LOGIN.path,
    component: LoginComponent,
    title: PATHS.CORE.LOGIN.title,
  },
  {
    path: PATHS.FEATURES.DASHBOARD.path,
    component: DashboardComponent,
    title: PATHS.FEATURES.DASHBOARD.title,
  },
  {
    path: PATHS.FEATURES.ACCOUNT.TRANSACTIONS.path,
    component: TransactionsComponent,
    title: PATHS.FEATURES.ACCOUNT.TRANSACTIONS.title,
  },
  {
    path: PATHS.FEATURES.ACCOUNT.RECEIPT.path,
    component: ReceiptComponent,
    title: PATHS.FEATURES.ACCOUNT.RECEIPT.title,
  },
  {
    path: PATHS.FEATURES.TRANSFER.path,
    component: TransferComponent,
    title: PATHS.FEATURES.TRANSFER.title,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
