import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MenuComponent } from './menu/menu/menu.component';
import { RegistersolicitudcarComponent } from './inscriptions/registersolicitudcar/registersolicitudcar.component';
import { ReportsolicitudcarComponent } from './reports/reportsolicitudcar/reportsolicitudcar.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistersolicitudcarComponent,
    ReportsolicitudcarComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
