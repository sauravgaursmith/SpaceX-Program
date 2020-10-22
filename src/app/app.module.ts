import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from "./launches/launches.component";
import { FiltersComponent } from "./launches/filters/filters.component";
import { ProgramsComponent } from "./launches/programs/programs.component";
import { DevelopByComponent } from "./launches/develop-by/develop-by.component";
import { LaunchesService } from "./launches/launches.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    FiltersComponent,
    ProgramsComponent,
    DevelopByComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ LaunchesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
