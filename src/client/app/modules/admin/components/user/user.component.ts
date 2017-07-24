// libs
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {GridOptions} from 'ag-grid/main';

import {IAppState, getUsers} from '../../../ngrx/index';
import {UserAction} from "../../actions/index";

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

  private users$: Observable<any>;

  constructor(private store: Store<IAppState>) {
    this.users$ = this.store.let(getUsers);
    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = <GridOptions> {
      columnDefs: this.columnDefs,
      rowHeight: 35, // recommended row height for material design data grids,
      onGridReady: () => {
        // this.gridOptions.api.sizeColumnsToFit();
        this.users$.subscribe(
          rowData => {
            console.log("rowData", rowData);
            // the initial full set of data
            // note that we don't need to un-subscribe here as it's a one off data load
            if (this.gridOptions.api) { // can be null when tabbing between the examples
              this.gridOptions.api.setRowData(rowData);
            }
          }
        );
        this.gridOptions.api.sizeColumnsToFit();

      }
    };

    this.columnDefs = [
      {headerName: 'Username', field: 'username'},
      {headerName: 'Email Adress', field: 'email'},
      {headerName: 'First Name', field: 'first_name'},
      {headerName: 'Last Name', field: 'last_name'},
      {headerName: 'Active', field: 'active'},
    ];
  }

  ngOnInit() {
    this.store.dispatch(new UserAction.GetUsersAction(null));
  }
}
