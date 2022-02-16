import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    
    

  ],
  exports:[
    FooterComponent,
    NavBarComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
