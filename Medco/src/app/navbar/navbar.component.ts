import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faAirFreshener, faBars,faBox,faBoxes,faCogs, faHome, faInbox,  faPhone, faSearch, faShippingFast, faTachometerAlt, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import{} from '@fortawesome/fontawesome-svg-core'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faHome = faHome;
  faTachometerAlt = faTachometerAlt;
  faInbox = faInbox;
  faPhone = faPhone;
  faUser = faUser;
  faCogs = faCogs;
  faShippingFast = faShippingFast;
  faBoxes = faBoxes;
  faBox = faBox;
  faAirFreshener = faAirFreshener;
  faBars = faBars;

  constructor() { }

  ngOnInit() {

$('#menu-toggle,#menu-overlay').on("click",function(){
  $('body').toggleClass('open-menu');
});

$('#main-nav li a').on("click",function(){
  $('#main-nav li').removeClass('active');
  $(this).parent().addClass('active')
});

$('#tabs li').on("click",function(){
  var clickTarget = $(this).attr('data-target');
  $('.tab-target').removeClass('targeted');
  $('#'+clickTarget).addClass("targeted");
  $('#tabs li').removeClass('active');
  $(this).addClass('active')
});

$('#admin-search input').on('focus',function(){
  $('#header_logo').addClass('hidden');
});
$('#admin-search input').on('blur',function(){
  $('#header_logo').removeClass('hidden');
});
  }

}
