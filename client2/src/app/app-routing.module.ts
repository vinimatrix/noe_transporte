import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path:'reportes',
    loadChildren:()=>import('./reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path:'conductores',
    loadChildren:()=>import('./conductores/conductores.module').then(m => m.ConductoresModule)
  },
  {
    path:'pasajeros',
    loadChildren:()=>import('./pasajeros/pasajeros.module').then(m => m.PasajerosModule)
  },
  {
    path:'rutas',
    loadChildren:()=>import('./rutas/rutas.module').then(m => m.RutasModule)
  }
  ,
  {
    path:'viajes',
    loadChildren:()=>import('./viajes/viajes.module').then(m => m.ViajesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
