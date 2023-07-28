import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'info/:country', loadChildren: () => import('./components/country/detail-info/detail-info.module').then(m => m.DetailInfoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
