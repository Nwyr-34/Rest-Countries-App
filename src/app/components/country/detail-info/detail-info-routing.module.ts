import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailInfoComponent } from './detail-info.component';

const routes: Routes = [
  { path: '', component: DetailInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailInfoRoutingModule { }
