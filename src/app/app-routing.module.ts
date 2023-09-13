import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { EmployeeComponent } from './employee/employee.component';
import { BillsComponent } from './bills/bills.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'invoices', component: InvoiceComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
