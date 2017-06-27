// app
import {Component} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    'navbar.component.css',
  ],
})
export class NavbarComponent {
  private listTitles: any[];
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    // this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    // var titlee = this.location.prepareExternalUrl(this.location.path());
    // if (titlee.charAt(0) === '#') {
    //   titlee = titlee.slice(2);
    // }
    // for (var item = 0; item < this.listTitles.length; item++) {
    //   if (this.listTitles[item].path === titlee) {
    //     return this.listTitles[item].title;
    //   }
    // }
    return 'Dashboard';
  }
}
