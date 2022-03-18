import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestigationLibraryComponent } from './investigation-library/investigation-library.component';
import { NewsLibraryComponent } from './news-library/news-library.component';
import { PhotoVideoLibraryComponent } from './photo-video-library/photo-video-library.component';
import { StatisticsDataComponent } from './statistics-data/statistics-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newsLibrary', component: NewsLibraryComponent },
  { path: 'investigationLibrary', component: InvestigationLibraryComponent },
  { path: 'photoVideoLibrary', component: PhotoVideoLibraryComponent },
  { path: 'StatisticsData', component: StatisticsDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
