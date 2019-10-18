import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharlieRoutingModule } from './charlie-routing.module';
import { CharlieComponent } from './charlie.component';


@NgModule({
  declarations: [CharlieComponent],
  imports: [
    CommonModule,
    CharlieRoutingModule
  ]
})
export class CharlieModule { }
