import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentInjector } from '@angular/core';
import { MenuComponent } from './menu/menu/menu.component';
import { ReportsolicitudcarComponent } from './reports/reportsolicitudcar/reportsolicitudcar.component';
import { RegistersolicitudcarComponent } from './inscriptions/registersolicitudcar/registersolicitudcar.component';



const routes: Routes = [
{path:'menu', component: MenuComponent},
{path:'reports', component: ReportsolicitudcarComponent},
{path:'registro', component: RegistersolicitudcarComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
