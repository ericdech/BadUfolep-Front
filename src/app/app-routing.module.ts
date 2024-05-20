import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionnatsComponent } from './championnats/championnats.component';

const routes: Routes = [
  { path: 'championnats', component: ChampionnatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
