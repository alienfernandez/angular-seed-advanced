// libs
import {Component, OnInit} from '@angular/core';
import {SecurityService} from "../../../security/services/security.service";
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';
import {GridOptions} from "ag-grid/main";

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'sd-user-admin',
  templateUrl: 'user.component.html',
  // styleUrls: ['user.component.css']
})
export class UserAdminComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  constructor() {
    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = {
      rowHeight: 35, // recommended row height for material design data grids,
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.columnDefs = [
      {headerName: 'Make', field: 'make'},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price'}
    ];
    this.rowData = [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
    ];
  }

  ngOnInit() {

  }
}
