import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GymnaseListComponent } from './gymnase-list/gymnase-list.component';
import { DetailsGymnaseComponent } from './details-gymnase/details-gymnase.component';
import { CreateGymnaseComponent } from './create-gymnase/create-gymnase.component';
import { UpdateGymnaseComponent } from './update-gymnase/update-gymnase.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AssoSportiveComponent } from './asso-sportive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GymnaseListComponent,
    DetailsGymnaseComponent,
    CreateGymnaseComponent,
    UpdateGymnaseComponent,
    AssoSportiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
