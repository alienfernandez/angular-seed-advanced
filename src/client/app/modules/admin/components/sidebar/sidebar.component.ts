// libs
import {Component, OnInit} from '@angular/core';
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';
import {ROUTES} from './sidebar-routes.config';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'sd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  ngOnInit() {
    // $.getScript('../../assets/js/sidebar-moving-tab.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
