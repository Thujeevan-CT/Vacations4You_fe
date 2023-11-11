import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularPackageComponent } from './features/user-web-app/components/popular-package/popular-package.component';

@NgModule({
  declarations: [
    AppComponent,
  //  PopularPackageComponent,
    //FooterBarComponent,
   // NavBarComponent,
   // ServiceListSectionComponent,
  //  ServiceBookingSectionComponent,
    // UserMainDashboardSectionComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
