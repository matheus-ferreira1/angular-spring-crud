import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

// import unico que modulo engloba todos os comps da material ui, utilizado para reutilizar os imports e deixar codigo menos verboso
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule],
})
export class CoursesModule {}
