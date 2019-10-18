import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharlieComponent } from './charlie.component';

const routes: Routes = [{ path: '', component: CharlieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharlieRoutingModule { }
