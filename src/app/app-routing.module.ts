import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeAcuerdoComponent } from './de-acuerdo/de-acuerdo.component';
import { DeUnaComponent } from './de-una/de-una.component';

const routes: Routes = [
  { path: 'de-acuerdo', component: DeAcuerdoComponent }, // Ruta para DeAcuerdo
  { path: 'de-una', component: DeUnaComponent },         // Ruta para DeUna
  // { path: '', redirectTo: '/de-acuerdo', pathMatch: 'full' } // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
