import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  listItem = [
    { nameItem: 'مكتبة التقارير الدوراية ', iconItem: 'fa fa-bars ', url: '' },
    { nameItem: 'مكتبة الاخبار ', iconItem: 'fa fa-camera', url: '' },
    { nameItem: 'مكتبة التحقيق ومقالات الرية', iconItem: 'fa fa-newspaper-o', url: '' },
    { nameItem: ' مكتب  الصور الفديوهات', iconItem: 'fa fa-picture-o', url: '' },
    { nameItem: ' الاحصائيات والبيانات الرقمية', iconItem: 'fa fa-line-chart', url: '' },
    { nameItem: ' حسابات التواصل الاجتماعي ', iconItem: 'fa fa-user', url: '' },
    { nameItem: 'ادارة الموثرين ', iconItem: 'fa fa-cog', url: '' },
    { nameItem: ' الرصيد وتحليل  الأثر ', iconItem: 'fa fa-bar-chart', url: '' },
    { nameItem: ' الفعاليات', iconItem: 'fa fa-calendar-check-o', url: '' },
    { nameItem: ' الاجندة ', iconItem: 'fa fa-calendar-times-o', url: '' },
    { nameItem: ' البحث العام ', iconItem: 'fa fa-search', url: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
