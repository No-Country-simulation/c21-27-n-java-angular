import { Routes } from '@angular/router';

import { PATHS } from './config/paths';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HistoryComponent } from './features/transactions/history/history.component';
import { ReceiptComponent } from './features/transactions/receipt/receipt.component';
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
    path: PATHS.FEATURES.TRANSACTIONS.HISTORY.path,
    component: HistoryComponent,
    title: PATHS.FEATURES.TRANSACTIONS.HISTORY.title,
  },
  {
    path: PATHS.FEATURES.TRANSACTIONS.RECEIPT.path,
    component: ReceiptComponent,
    title: PATHS.FEATURES.TRANSACTIONS.RECEIPT.title,
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
