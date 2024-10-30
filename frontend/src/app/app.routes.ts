import { Routes } from '@angular/router';
import { CORE, FEATURES } from '@config/paths';

import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransferComponent } from './features/transfer/transfer.component';
import { TransferConfirmComponent } from '@features/transfer/components/transfer-confirm/transfer-confirm.component';
import { HistoryItemComponent } from '@features/dashboard/components/history-item/history-item.component';

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
    path: FEATURES.TRANSFER.path,
    component: TransferComponent,
    title: FEATURES.TRANSFER.title,
  },
  {
    path: FEATURES.TRANSFER.CHILDRENS.CONFIRM.path,
    title: FEATURES.TRANSFER.CHILDRENS.CONFIRM.title,
    component: TransferConfirmComponent,
  },
  {
    path: FEATURES.HISTORY.path + '/:id',
    title: FEATURES.HISTORY.title,
    component: HistoryItemComponent,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
