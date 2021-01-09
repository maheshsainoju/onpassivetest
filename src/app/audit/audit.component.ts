import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  originalData;
  type="asc"
tableData = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.originalData = this.apiService.getTableData();
    this.tableData = [...this.originalData];
    }

  filterName(str) {
    if(str == ''){
      this.tableData = this.originalData;
      return false;
    }
    this.tableData = this.originalData.filter(res => res.name.indexOf(str)> -1);
  }

  sortBy(key) {
    let val = this.type == 'desc' ? 1 : -1
    this.tableData.sort((a,b)=> {
      return val;
    });
    this.type="asc";
  }

}
