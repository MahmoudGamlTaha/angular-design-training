import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { NewsLibraryComponent } from './news-library/news-library.component';
import { InvestigationLibraryComponent } from './investigation-library/investigation-library.component';
import { PhotoVideoLibraryComponent } from './photo-video-library/photo-video-library.component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardModule } from '../dashboard/dashboard.module';
import { StatisticsDataComponent } from './statistics-data/statistics-data.component';





@NgModule({
  declarations: [
    HomeComponent,
    NewsLibraryComponent,
    InvestigationLibraryComponent,
    PhotoVideoLibraryComponent,
    StatisticsDataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    TranslateModule,
    DashboardModule
  ],
  exports:[
NewsLibraryComponent,
HomeComponent,
PhotoVideoLibraryComponent
  ]
})
export class HomeModule { }
