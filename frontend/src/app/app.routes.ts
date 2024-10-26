import { Routes } from '@angular/router';
import { CORE, FEATURES } from '@config/paths';

import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HistoryComponent } from './features/transactions/history/history.component';
import { TransferComponent } from './features/transfer/transfer.component';
import { ConfirmTransferComponent } from '@features/transfer/components/confirm-transfer/confirm-transfer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: CORE.LOGIN.path,
    component: LoginComponent,
    title: CORE.LOGIN.title,
  },
  {
    path: FEATURES.DASHBOARD.path,
    component: DashboardComponent,
    title: FEATURES.DASHBOARD.title,
  },
  {
    path: FEATURES.TRANSACTIONS.HISTORY.path,
    component: HistoryComponent,
    title: FEATURES.TRANSACTIONS.HISTORY.title,
  },
  {
    path: FEATURES.TRANSFER.path,
    component: TransferComponent,
    title: FEATURES.TRANSFER.title,
  },
  {
    path: FEATURES.TRANSFER.CHILDRENS.CONFIRM.path,
    title: FEATURES.TRANSFER.CHILDRENS.CONFIRM.title,
    component: ConfirmTransferComponent,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
