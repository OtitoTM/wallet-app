// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './c/dashboard/dashboard.component';
import { TransactionManagementComponent } from './c/transaction-management/transaction-management.component';
import { WalletManagementComponent } from './component/wallet-management/wallet-management.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'transactions', component: TransactionManagementComponent },
  { path: 'wallets', component: WalletManagementComponent },
  { path: 'accounts', component: AccountManagementComponent },
  { path: '**', redirectTo: '' }
];
