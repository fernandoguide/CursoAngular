import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosForm2Component } from './cursos-form2/cursos-form2.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CursosListaComponent, CursosFormComponent, CursosForm2Component]
})
export class CursosModule { }
