import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadComponent } from './dad.component';

const routes: Routes = [{ path: '', component: DadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadRoutingModule { }
