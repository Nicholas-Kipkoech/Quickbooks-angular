import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  dataSource: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'Id',
    'GivenName',
    'FamilyName',
    'DisplayName',
    'Active',
    'MetaData',
    'sparse',
  ];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.dataSource = data.employees.map((employee: any) => ({
        Id: employee.Id,
        GivenName: employee.GivenName,
        FamilyName: employee.FamilyName,
        DisplayName: employee.DisplayName,
        Active: employee.Active,
        MetaData: employee.MetaData,
        sparse: employee.sparse,
      }));
      this.isLoading = false;
    });
  }
}
