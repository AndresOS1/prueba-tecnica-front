import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHauseComponent } from './Views/Hause/list-hause/list-hause.component';
import { CreateHauseComponent } from './Views/Hause/create-hause/create-hause.component';
import { ShowHauseComponent } from './Views/Hause/show-hause/show-hause.component';
import { UpdateHauseComponent } from './Views/Hause/update-hause/update-hause.component';
import { HouseServiceService } from "./Services/house-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ListHauseComponent,
    CreateHauseComponent,
    ShowHauseComponent,
    UpdateHauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HouseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
