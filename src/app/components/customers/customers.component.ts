import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  dataSource: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'Id',
    'GivenName',
    'FamilyName',
    'Taxable',
    'PrimaryPhone',
    'PrimaryEmailAddr',
    'Balance',
    'BalanceWithJobs',
    'PreferredDeliveryMethod',
    'Active',
  ];
  constructor(private customerService: CustomersService) {}
  ngOnInit() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.dataSource = data.customers.map((customer: any) => ({
        Id: customer.Id,
        GivenName: customer.GivenName,
        FamilyName: customer.FamilyName,
        Taxable: customer.Taxable,
        PrimaryPhone: customer.PrimaryPhone,
        PrimaryEmailAddr: customer.PrimaryEmailAddr,
        Balance: customer.Balance,
        BalanceWithJobs: customer.BalanceWithJobs,
        PreferredDeliveryMethod: customer.PreferredDeliveryMethod,
        Active: customer.Active,
      }));
      this.isLoading = false;
    });
  }
}
