// libs
import {Component, OnInit} from '@angular/core';
import {SecurityService} from "../../../security/services/security.service";
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'sd-home-admin',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeAdminComponent implements OnInit {

  public menuItems: any[];

  constructor(private service: SecurityService) {

  }

  test() {
    this.service.test().subscribe(
      data => {
        console.log("dataaaaaaaaaa", data);
      }
    );
  }

  ngOnInit() {
  }
}
