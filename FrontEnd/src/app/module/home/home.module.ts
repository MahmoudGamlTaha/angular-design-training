import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { NewsLibraryComponent } from './news-library/news-library.component';
import { InvestigationLibraryComponent } from './investigation-library/investigation-library.component';
import { PhotoVideoLibraryComponent } from './photo-video-library/photo-video-library.component';
import { TranslateModule } from '@ngx-translate/core';





@NgModule({
  declarations: [
    HomeComponent,
    NewsLibraryComponent,
    InvestigationLibraryComponent,
    PhotoVideoLibraryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    TranslateModule
   

  
  ],
  exports:[
NewsLibraryComponent,
    HomeComponent
  ]
})
export class HomeModule { }
