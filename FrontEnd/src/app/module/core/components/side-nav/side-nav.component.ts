import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
//"مكتبة التقرير الدورية "
export class SideNavComponent implements OnInit {
  listItem = [
    { nameItem: "sidenav.periodicreportlibrary", iconItem: 'fa fa-bars ', url: '/home' },
    { nameItem: "sidenav.newslibrary", iconItem: 'fa fa-list-alt', url: '/newsLibrary' },
    { nameItem: "sidenav.library", iconItem: 'fa fa-newspaper-o', url: '/investigationLibrary' },
    { nameItem: "sidenav.office-photo", iconItem: 'fa fa-picture-o', url: '/photoVideoLibrary' },
    { nameItem:  "sidenav.statistics", iconItem: 'fa fa-line-chart', url: '4' },
    { nameItem:  "sidenav.accounts", iconItem: 'fa fa-user', url: '5' },
    { nameItem:  "sidenav.management", iconItem: 'fa fa-cog', url: '10' },
    { nameItem:  "sidenav.analysis", iconItem: 'fa fa-bar-chart', url: '6' },
    { nameItem:  "sidenav.events", iconItem: 'fa fa-calendar-check-o', url: '7' },
    { nameItem:  "sidenav.agenda", iconItem: 'fa fa-calendar-times-o', url: '8' },
    { nameItem:  "sidenav.general-search", iconItem: 'fa fa-search', url: '9' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
