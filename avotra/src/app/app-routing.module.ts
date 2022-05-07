import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'avotra', loadChildren: () => import('./avotra/avotra.module').then(m => m.AvotraModule) },
  { path:  '', redirectTo: 'avotra', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
