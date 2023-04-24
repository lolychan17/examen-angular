import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaExamenComponent } from './componentes/pantalla-exam/pantalla-examen/pantalla-examen.component';


const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'tabla', component:PantallaExamenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
