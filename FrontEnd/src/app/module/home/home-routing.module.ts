import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestigationLibraryComponent } from './investigation-library/investigation-library.component';
import { NewsLibraryComponent } from './news-library/news-library.component';

const routes: Routes = [
   {path: '', component : HomeComponent},
    {path: 'home', component : HomeComponent},
     {path: 'newsLibrary', component : NewsLibraryComponent},
     {path: 'investigationLibrary', component : InvestigationLibraryComponent},
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 

})
export class HomeRoutingModule { }
