import { Routes } from '@angular/router';

import { DepositComponent } from 'src/app/pages/deposit/deposit.component';
import { SafeBoxComponent } from 'src/app/pages/safeBox/safebox.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TransferenceComponent } from '../../pages/transference/transference.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'transference', component: TransferenceComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'safebox/:amount', component: SafeBoxComponent },
  { path: 'tables', component: TablesComponent },
];
