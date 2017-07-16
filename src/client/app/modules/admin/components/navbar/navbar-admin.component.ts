// libs
import {Component, OnInit} from '@angular/core';
// import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'sd-navbar-admin',
  templateUrl: 'navbar-admin.component.html',
  // styleUrls: ['assets/css/custom.gentelella.css']
})
export class NavbarAdminComponent implements OnInit {

  toggleClicked(event: MouseEvent) {
    var target = event.srcElement.id;
    // var body = $('body');
    var layout = $('div[data-role="layout"]');
    // console.log("layout", layout);
    var menu = $('#sidebar-menu');

    // toggle small or large menu
    if (layout.hasClass('nav-md')) {
      menu.find('li.active ul').hide();
      menu.find('li.active').addClass('active-sm').removeClass('active');
    } else {
      menu.find('li.active-sm ul').show();
      menu.find('li.active-sm').addClass('active').removeClass('active-sm');
    }
    layout.toggleClass('nav-md nav-sm');

  }


  ngOnInit() {
    console.log('hello `topnavbar` component');
  }
}
