import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ViajesComponent } from './viajes/viajes.component';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    ViajesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RutasModule { }
