import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    CoreModule,
  ],
  exports:[
    HomePageComponent
  ]
})
export class DashboardModule { }
