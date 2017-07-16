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
  // styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // TypeScript public modifiers
  private $BODY;
  private $layout;
  private $MENU_TOGGLE;
  private $SIDEBAR_MENU;
  private $SIDEBAR_FOOTER;
  private $LEFT_COL;
  private $RIGHT_COL;
  private $NAV_MENU;
  private $FOOTER;

  ngAfterViewInit(): void {
    // this.plot();
  }

  anchorClicked(event: MouseEvent) {

    var target = event.srcElement.id;

    var $li = $('#' + target.replace('chevron', 'li')).parent();

    if ($li.is('.active')) {
      $li.removeClass('active active-sm');
      $('ul:first', $li).slideUp(function () {
        //this.setContentHeight();
      });
    } else {
      // prevent closing menu if we are on child menu
      if (!$li.parent().is('.child_menu')) {
        $('#sidebar-menu').find('li').removeClass('active active-sm');
        $('#sidebar-menu').find('li ul').slideUp();
      }

      $li.addClass('active');

      $('ul:first', $li).slideDown(function () {
        //this.setContentHeight();
      });
    }
  }

  plot() {
    // console.log('in sidebar');

    this.$BODY = $('body');
    this.$layout = $('div[data-role="layout"]');
    this.$MENU_TOGGLE = $('#menu_toggle');
    this.$SIDEBAR_MENU = $('#sidebar-menu');
    this.$SIDEBAR_FOOTER = $('.sidebar-footer');
    this.$LEFT_COL = $('.left_col');
    this.$RIGHT_COL = $('.right_col');
    this.$NAV_MENU = $('.nav_menu');
    this.$FOOTER = $('footer');

    var $a = this.$SIDEBAR_MENU.find('a');
    this.$SIDEBAR_MENU.find('a').on('click', function (ev) {
      var $li = $(this).parent();

      if ($li.is('.active')) {
        $li.removeClass('active active-sm');
        $('ul:first', $li).slideUp(function () {
          this.setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is('.child_menu')) {
          this.$SIDEBAR_MENU.find('li').removeClass('active active-sm');
          this.$SIDEBAR_MENU.find('li ul').slideUp();
        }

        $li.addClass('active');

        $('ul:first', $li).slideDown(function () {
          this.setContentHeight();
        });
      }
    });

    // toggle small or large menu
    this.$MENU_TOGGLE.on('click', function () {
      if (this.$layout.hasClass('nav-md')) {
        this.$SIDEBAR_MENU.find('li.active ul').hide();
        this.$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
      } else {
        this.$SIDEBAR_MENU.find('li.active-sm ul').show();
        this.$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
      }

      this.$layout.toggleClass('nav-md nav-sm');

      this.setContentHeight();
    });

  }

  ngOnInit() {
    // console.log('hello `sidebar` component');
  }

  setContentHeight() {
    // reset height
    this.$RIGHT_COL.css('min-height', $(window).height());

    var bodyHeight = this.$BODY.outerHeight(),
      footerHeight = this.$BODY.hasClass('footer_fixed') ? -10 : this.$FOOTER.height(),
      leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height(),
      contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= this.$NAV_MENU.height() + footerHeight;

    this.$RIGHT_COL.css('min-height', contentHeight);
  };

}
