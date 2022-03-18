import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
