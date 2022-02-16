import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  listItem = [
    { nameItem: 'مكتبة التقارير الدوراية ', iconItem: 'fa fa-bars ', url: '/home' },
    { nameItem: 'مكتبة الاخبار ', iconItem: 'fa fa-camera', url: '/newsLibrary' },
    { nameItem: 'مكتبة التحقيق ومقالات الرية', iconItem: 'fa fa-newspaper-o', url: '/investigationLibrary' },
    { nameItem: ' مكتب  الصور الفديوهات', iconItem: 'fa fa-picture-o', url: '3' },
    { nameItem: ' الاحصائيات والبيانات الرقمية', iconItem: 'fa fa-line-chart', url: '4' },
    { nameItem: ' حسابات التواصل الاجتماعي ', iconItem: 'fa fa-user', url: '5' },
    { nameItem: 'ادارة الموثرين ', iconItem: 'fa fa-cog', url: '10' },
    { nameItem: ' الرصيد وتحليل  الأثر ', iconItem: 'fa fa-bar-chart', url: '6' },
    { nameItem: ' الفعاليات', iconItem: 'fa fa-calendar-check-o', url: '7' },
    { nameItem: ' الاجندة ', iconItem: 'fa fa-calendar-times-o', url: '8' },
    { nameItem: ' البحث العام ', iconItem: 'fa fa-search', url: '9' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
