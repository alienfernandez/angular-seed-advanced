// libs
import {Component, OnInit} from '@angular/core';
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'sd-admin-footer',
  templateUrl: 'footer-admin.component.html',
  // styleUrls: ['sidebar.component.css']
})
export class FooterAdminComponent implements OnInit {

  ngOnInit() {
    console.log('hello `Footer Admin` component');
  }
}
