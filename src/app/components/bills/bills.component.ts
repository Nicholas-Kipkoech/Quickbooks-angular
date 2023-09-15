import { Component, OnInit } from '@angular/core';
import { BillsService } from 'src/app/services/bills/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  dataSource: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'Id',
    'DueDate',
    'Balance',
    'domain',
    'sparse',
    'SyncToken',
    'MetaData',
    'TxnDate',
    'CurrencyRef',
    'TotalAmt',
  ];
  constructor(private billService: BillsService) {}
  ngOnInit() {
    this.billService.getBills().subscribe((data: any) => {
      this.dataSource = data.bills.map((bill: any) => ({
        DueDate: bill.DueDate,
        Balance: bill.Balance,
        domain: bill.domain,
        sparse: bill.sparse,
        Id: bill.Id,
        SyncToken: bill.SyncToken,
        MetaData: bill.MetaData,
        TxnDate: bill.TxnDate,
        CurrencyRef: bill.CurrencyRef,
        TotalAmt: bill.TotalAmt,
      }));
      this.isLoading = false;
    });
  }
}
