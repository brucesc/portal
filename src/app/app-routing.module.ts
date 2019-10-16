import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
}, {
  path: 'about',
  loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
}, {
  path: 'dad',
  loadChildren: () => import('./dad/dad.module').then(m => m.DadModule)
}, {
  path: '', redirectTo: '/home', pathMatch: 'full'
}, {
  path: '**', component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
