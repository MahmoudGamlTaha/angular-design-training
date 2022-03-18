import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_LANGUAGE, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './module/core/core.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { HomeModule } from './module/home/home.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    DashboardModule,

TranslateModule.forRoot({
loader: {
provide: TranslateLoader,
useFactory: HttpLoaderFactory,
deps: [HttpClient]
},
 defaultLanguage:'ar'
})
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
