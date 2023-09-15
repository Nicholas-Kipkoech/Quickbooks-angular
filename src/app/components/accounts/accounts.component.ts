import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  dataSource: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'Name',
    'FullyQualifiedName',
    'Active',
    'Classification',
    'AccountType',
    'AccountSubType',
    'CurrentBalance',
    'CurrencyRef',
    'Id',
    'MetaData',
  ];

  constructor(private accountService: AccountsService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe((data: any) => {
      // Assuming data is an array of account objects
      this.dataSource = data.accounts.map((account: any) => ({
        Name: account.Name,
        FullyQualifiedName: account.FullyQualifiedName,
        Active: account.Active,
        Classification: account.Classification,
        AccountType: account.AccountType,
        AccountSubType: account.AccountSubType,
        CurrentBalance: account.CurrentBalance,
        CurrencyRef: account.CurrencyRef?.name, // Assuming you want the currency name
        Id: account.Id,
        MetaData: account.MetaData,
      }));
      this.isLoading = false;
    });
  }
}
