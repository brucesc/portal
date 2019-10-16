import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadRoutingModule } from './dad-routing.module';
import { DadComponent } from './dad.component';

@NgModule({
  declarations: [DadComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    DadRoutingModule
  ]
})
export class DadModule { }
